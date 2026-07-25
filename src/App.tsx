import { FormEvent, ReactNode, useMemo, useState } from 'react'
import { Activity, ArrowLeft, ArrowRight, Banknote, Bell, Boxes, Building2, ChevronRight, CircleDollarSign, ClipboardList, Clock3, Download, Eye, Factory, FileText, Gauge, Heart, Languages, LayoutDashboard, LockKeyhole, LogOut, Mail, MapPin, Menu, MessageSquareText, PackageCheck, ReceiptText, Search, Send, Settings, ShieldCheck, SlidersHorizontal, TrendingUp, UserRound, Users, Warehouse, Wrench, X } from 'lucide-react'
import { Category, copy, languageNames, Locale, Product, products } from './data'

type Screen = 'store' | 'dashboard' | 'admin'
type Customer = { name: string; email: string; company: string }
type Enquiry = { id: string; product: Product; date: string; status: string }

function loadCustomer(): Customer | null {
  try { const value = localStorage.getItem('eet-customer'); return value ? JSON.parse(value) : null } catch { return null }
}

function App() {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem('eet-locale') as Locale) || 'en')
  const [screen, setScreen] = useState<Screen>('store')
  const [customer, setCustomer] = useState<Customer | null>(loadCustomer)
  const [authOpen, setAuthOpen] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register')
  const [selected, setSelected] = useState<Product | null>(null)
  const [pending, setPending] = useState<Product | null>(null)
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [chatOpen, setChatOpen] = useState(false)
  const t = (key: string) => copy[locale][key] || copy.en[key] || key

  function changeLocale(next: Locale) {
    setLocale(next); localStorage.setItem('eet-locale', next); document.documentElement.lang = next === 'zh' ? 'zh-CN' : next
  }
  function navigate(next: Screen) {
    if (next === 'dashboard' && !customer) { setAuthMode('login'); setAuthOpen(true); return }
    setScreen(next); window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  function createEnquiry(product: Product) {
    setEnquiries((items) => items.some((item) => item.product.id === product.id) ? items : [{ id: 'RFQ-' + (24018 + items.length), product, date: new Date().toLocaleDateString(), status: 'Reviewing requirement' }, ...items])
    setSelected(null); setPending(null); setScreen('dashboard'); window.scrollTo({ top: 0 })
  }
  function requestQuote(product: Product) {
    if (customer) createEnquiry(product)
    else { setPending(product); setAuthMode('register'); setAuthOpen(true) }
  }
  function completeAuth(profile: Customer) {
    setCustomer(profile); localStorage.setItem('eet-customer', JSON.stringify(profile)); setAuthOpen(false)
    if (pending) createEnquiry(pending); else setScreen('dashboard')
  }
  function logout() { localStorage.removeItem('eet-customer'); setCustomer(null); setScreen('store') }

  return <>
    {screen === 'store' && <Storefront locale={locale} t={t} customer={customer} changeLocale={changeLocale} navigate={navigate} openAuth={() => setAuthOpen(true)} openProduct={setSelected} requestQuote={requestQuote} />}
    {screen === 'dashboard' && customer && <CustomerDashboard customer={customer} enquiries={enquiries} locale={locale} t={t} navigate={navigate} logout={logout} />}
    {screen === 'admin' && <AdminDashboard t={t} navigate={navigate} />}
    {selected && <ProductModal product={selected} locale={locale} t={t} close={() => setSelected(null)} requestQuote={requestQuote} />}
    {authOpen && <AuthModal mode={authMode} setMode={setAuthMode} t={t} close={() => setAuthOpen(false)} complete={completeAuth} />}
    {screen !== 'admin' && <><button className='chat-launcher' onClick={() => customer ? setChatOpen(!chatOpen) : setAuthOpen(true)} aria-label={t('chatTitle')} title={t('chatTitle')}>{chatOpen ? <X /> : <MessageSquareText />}</button>{chatOpen && customer && <ChatPanel t={t} close={() => setChatOpen(false)} />}</>}
  </>
}

type StoreProps = { locale: Locale; t: (key: string) => string; customer: Customer | null; changeLocale: (locale: Locale) => void; navigate: (screen: Screen) => void; openAuth: () => void; openProduct: (product: Product) => void; requestQuote: (product: Product) => void }

function Storefront({ locale, t, customer, changeLocale, navigate, openAuth, openProduct, requestQuote }: StoreProps) {
  const [category, setCategory] = useState<Category>('all')
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const visible = useMemo(() => products.filter((product) => (category === 'all' || product.category === category) && (product.name[locale] + product.summary[locale] + product.location).toLowerCase().includes(search.toLowerCase())), [category, search, locale])
  function scrollTo(id: string) { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <div className='site-shell'>
    <div className='announcement'><i />{t('announcement')}</div>
    <header className='site-header'><button className='brand-button' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Brand /></button><nav className={menuOpen ? 'main-nav is-open' : 'main-nav'}><button onClick={() => scrollTo('products')}>{t('machines')}</button><button onClick={() => { setCategory('cutting'); scrollTo('products') }}>{t('tools')}</button><button onClick={() => scrollTo('services')}>{t('services')}</button><button onClick={() => scrollTo('about')}>{t('about')}</button></nav><div className='header-actions'><LanguageControl locale={locale} change={changeLocale} /><button className='button button-ghost sign-button' onClick={() => customer ? navigate('dashboard') : openAuth()}>{customer ? <LayoutDashboard /> : <UserRound />}{customer ? t('dashboard') : t('signIn')}</button><button className='icon-button mobile-menu' onClick={() => setMenuOpen(!menuOpen)} aria-label='Menu'>{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main>
      <section className='hero'><div className='hero-shade' /><div className='hero-content'><Eyebrow light>{t('heroEyebrow')}</Eyebrow><h1>{t('heroTitle')}</h1><p>{t('heroBody')}</p><div className='hero-actions'><button className='button button-primary' onClick={() => scrollTo('products')}>{t('explore')}<ArrowRight /></button><button className='button button-light' onClick={openAuth}><MessageSquareText />{t('talk')}</button></div></div><div className='hero-metrics'><div><PackageCheck /><span><strong>18</strong>{t('inStock')}</span></div><div><Clock3 /><span><strong>&lt; 1 day</strong>{t('response')}</span></div><div><Wrench /><span><strong>MY-wide</strong>{t('support')}</span></div></div></section>
      <section className='trust-band' id='about'><div><Eyebrow>EET ENGINEERING</Eyebrow><h2>{t('trusted')}</h2></div><p>{t('trustedBody')}</p><div className='trust-proof'><ShieldCheck /><span><strong>15+ years</strong>Industrial sourcing experience</span></div></section>
      <section className='catalog-section' id='products'><div className='section-heading'><div><Eyebrow>CURRENT INVENTORY</Eyebrow><h2>{t('browse')}</h2><p>{t('browseBody')}</p></div><div className='catalog-count'><strong>{String(visible.length).padStart(2, '0')}</strong><span>listed items</span></div></div><div className='catalog-toolbar'><label className='search-field'><Search /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={t('search')} /></label><div className='category-tabs'>{(['all', 'machines', 'cutting', 'measuring'] as Category[]).map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item === 'machines' ? t('machines') : t(item)}</button>)}</div><button className='icon-button filter-button' title='Filters'><SlidersHorizontal /></button></div><div className='product-grid'>{visible.map((product) => <ProductCard key={product.id} product={product} locale={locale} t={t} open={() => openProduct(product)} quote={() => requestQuote(product)} />)}</div></section>
      <section className='services-section' id='services'><div className='services-heading'><Eyebrow light>FULL-LIFECYCLE SUPPORT</Eyebrow><h2>{t('why')}</h2><p>{t('whyBody')}</p></div><div className='service-list'><Service icon={<Gauge />} number='01' title={t('service1')} body={t('service1Body')} /><Service icon={<Factory />} number='02' title={t('service2')} body={t('service2Body')} /><Service icon={<Wrench />} number='03' title={t('service3')} body={t('service3Body')} /></div></section>
      <section className='process-section'><Eyebrow>FROM REQUIREMENT TO RUNNING</Eyebrow><h2>{t('process')}</h2><div className='process-track'>{['step1', 'step2', 'step3', 'step4'].map((step, index) => <div className='process-step' key={step}><b>{String(index + 1).padStart(2, '0')}</b><span>{t(step)}</span>{index < 3 && <ArrowRight />}</div>)}</div></section>
      <section className='cta-section'><div><Eyebrow light>ENGINEER-TO-ENGINEER</Eyebrow><h2>{t('ctaTitle')}</h2><p>{t('ctaBody')}</p></div><button className='button button-primary' onClick={openAuth}>{t('start')}<ArrowRight /></button></section>
    </main>
    <footer className='site-footer'><div className='footer-brand'><Brand light /><p>{t('footerNote')}</p></div><div><strong>{t('machines')}</strong><button onClick={() => scrollTo('products')}>CNC Turning</button><button>Machining Centres</button><button>Drilling & Grinding</button></div><div><strong>{t('services')}</strong><button>Installation</button><button>Maintenance</button><button>Machine inspection</button></div><div className='footer-contact'><strong>Malaysia</strong><span>Shah Alam, Selangor</span><a href='mailto:sales@eetengineering.my'>sales@eetengineering.my</a><a href='tel:+60355218840'>+60 3 5521 8840</a></div><div className='footer-bottom'><span>© 2026 EET Engineering Sdn. Bhd.</span><button onClick={() => navigate('admin')}><ShieldCheck />{t('staffAccess')}</button></div></footer>
  </div>
}

function ProductCard({ product, locale, t, open, quote }: { product: Product; locale: Locale; t: (key: string) => string; open: () => void; quote: () => void }) {
  return <article className='product-card'><div className='product-image' onClick={open}><img src={product.image} alt={product.name[locale]} /><span className={'stock-badge ' + product.status}><i />{t(product.status)}</span><button className='favorite-button' title='Save'><Heart /></button></div><div className='product-content'><div className='product-meta'><span>{product.category === 'machines' ? t('machines') : t(product.category)}</span><span>{t(product.condition)}</span></div><h3>{product.name[locale]}</h3><p>{product.summary[locale]}</p><div className='location-row'><MapPin />{product.location}</div><div className='product-footer'><div><span>{t('from')}</span><strong>{product.price}</strong></div><div className='product-buttons'><button className='icon-button' onClick={open} title={t('details')}><Eye /></button><button className='button button-dark' onClick={quote}>{t('quote')}<ArrowRight /></button></div></div></div></article>
}

function ProductModal({ product, locale, t, close, requestQuote }: { product: Product; locale: Locale; t: (key: string) => string; close: () => void; requestQuote: (product: Product) => void }) {
  return <div className='modal-backdrop' onMouseDown={(event) => event.target === event.currentTarget && close()}><section className='product-modal' role='dialog' aria-modal='true'><button className='modal-close icon-button' onClick={close}><X /></button><div className='modal-product-image'><img src={product.image} alt={product.name[locale]} /><span className={'stock-badge ' + product.status}><i />{t(product.status)}</span></div><div className='modal-product-copy'><div className='product-meta'><span>{t(product.category)}</span><span>{t(product.condition)}</span></div><h2>{product.name[locale]}</h2><p>{product.summary[locale]}</p><div className='modal-price'><span>{t('from')}</span><strong>{product.price}</strong></div><h3>{t('spec')}</h3><dl className='spec-list'>{product.specs.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl><div className='modal-location'><MapPin /><span><small>{t('location')}</small>{product.location}</span></div><button className='button button-primary full-button' onClick={() => requestQuote(product)}>{t('quote')}<ArrowRight /></button></div></section></div>
}

function AuthModal({ mode, setMode, t, close, complete }: { mode: 'login' | 'register'; setMode: (mode: 'login' | 'register') => void; t: (key: string) => string; close: () => void; complete: (customer: Customer) => void }) {
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); complete({ name: String(data.get('name') || data.get('email')).split('@')[0], email: String(data.get('email')), company: String(data.get('company') || 'Your company') }) }
  return <div className='modal-backdrop' onMouseDown={(event) => event.target === event.currentTarget && close()}><section className='auth-modal' role='dialog' aria-modal='true'><div className='auth-visual'><Brand light /><div><div className='auth-lock'><ShieldCheck /></div><h2>{t('account')}</h2><p>{t('accountLead')}</p></div><span>Secure customer portal</span></div><div className='auth-form-wrap'><button className='modal-close icon-button' onClick={close}><X /></button><div className='auth-tabs'><button className={mode === 'login' ? 'active' : ''} onClick={() => setMode('login')}>{t('loginTab')}</button><button className={mode === 'register' ? 'active' : ''} onClick={() => setMode('register')}>{t('registerTab')}</button></div><form onSubmit={submit}>{mode === 'register' && <><Field icon={<UserRound />} label={t('fullName')} name='name' type='text' /><Field icon={<Building2 />} label={t('company')} name='company' type='text' /></>}<Field icon={<Mail />} label={t('email')} name='email' type='email' /><Field icon={<LockKeyhole />} label={t('password')} name='password' type='password' /><button className='button button-primary full-button'>{mode === 'register' ? t('create') : t('continue')}<ArrowRight /></button></form><p className='auth-note'><LockKeyhole />{t('authNote')}</p></div></section></div>
}

function Field({ icon, label, name, type }: { icon: ReactNode; label: string; name: string; type: string }) { return <label className='form-field'><span>{label}</span><div>{icon}<input name={name} type={type} required /></div></label> }

function CustomerDashboard({ customer, enquiries, locale, t, navigate, logout }: { customer: Customer; enquiries: Enquiry[]; locale: Locale; t: (key: string) => string; navigate: (screen: Screen) => void; logout: () => void }) {
  return <div className='portal-shell'><aside className='portal-sidebar'><Brand light /><nav><button className='active'><LayoutDashboard />{t('accountOverview')}</button><button><MessageSquareText />{t('openEnquiries')}<b>{enquiries.length}</b></button><button><FileText />{t('activeQuotes')}</button><button><ReceiptText />{t('documents')}</button><button><Heart />{t('saved')}</button></nav><div className='sidebar-user'><span>{customer.name[0].toUpperCase()}</span><div><strong>{customer.name}</strong><small>{customer.company}</small></div><button onClick={logout}><LogOut /></button></div></aside><main className='portal-main'><header className='portal-header'><button className='back-link' onClick={() => navigate('store')}><ArrowLeft />{t('backStore')}</button><div><button className='icon-button'><Bell /></button><span className='portal-avatar'>{customer.name[0].toUpperCase()}</span></div></header><div className='portal-content'><div className='portal-title'><div><span>{new Date().toLocaleDateString()}</span><h1>{t('welcome')}, {customer.name.split(' ')[0]}</h1><p>{customer.company}</p></div><button className='button button-primary' onClick={() => navigate('store')}>{t('browseEquipment')}<ArrowRight /></button></div><section className='metric-grid'><Metric icon={<MessageSquareText />} value={enquiries.length} label={t('openEnquiries')} accent='red' /><Metric icon={<FileText />} value='0' label={t('activeQuotes')} accent='blue' /><Metric icon={<ReceiptText />} value='0' label={t('documents')} accent='green' /><Metric icon={<Heart />} value='3' label={t('saved')} accent='amber' /></section><section className='activity-section'><div className='panel-heading'><div><h2>{t('recent')}</h2><p>Enquiries, quotations and service updates</p></div></div>{enquiries.length === 0 ? <div className='empty-state'><div><ClipboardList /></div><h3>{t('noEnquiry')}</h3><p>{t('noEnquiryBody')}</p><button className='button button-dark' onClick={() => navigate('store')}>{t('browseEquipment')}<ArrowRight /></button></div> : <div className='enquiry-list'>{enquiries.map((item) => <div className='enquiry-row' key={item.id}><img src={item.product.image} alt='' /><div className='enquiry-copy'><span>{item.id}</span><strong>{item.product.name[locale]}</strong><small>{item.date}</small></div><div className='progress-status'><i /><span>{item.status}</span></div><strong>{item.product.price}</strong><button className='icon-button'><ChevronRight /></button></div>)}</div>}</section></div></main></div>
}

function AdminDashboard({ t, navigate }: { t: (key: string) => string; navigate: (screen: Screen) => void }) {
  const rows = [['RFQ-24018', 'Kejuruteraan Lim Sdn Bhd', 'AxisPro CT-460', 'Qualifying', 'N. Farah', 'RM 128,000'], ['RFQ-24017', 'Jaya Precision Works', 'TitanMill VMC-850', 'Quotation sent', 'A. Kumar', 'RM 188,000'], ['RFQ-24016', 'Wei Sheng Manufacturing', 'RD-50 Radial Drill', 'Inspection booked', 'N. Farah', 'RM 42,800']]
  return <div className='admin-shell'><aside className='admin-sidebar'><Brand light /><span className='admin-workspace'>EET HQ · Malaysia</span><nav><small>WORKSPACE</small><button className='active'><LayoutDashboard />{t('admin')}</button><button><MessageSquareText />{t('inbox')}<b>8</b></button><button><ClipboardList />{t('enquiries')}</button><button><Warehouse />{t('inventory')}</button><button><Users />{t('customers')}</button><small>FINANCE</small><button><CircleDollarSign />{t('accounting')}</button><button><ReceiptText />Invoices & receipts</button><small>SYSTEM</small><button><Settings />{t('settings')}</button></nav><div className='secure-access'><ShieldCheck /><span><strong>Secure session</strong><small>IP verified · MFA active</small></span></div></aside><main className='admin-main'><header className='admin-header'><button className='back-link' onClick={() => navigate('store')}><ArrowLeft />{t('backStore')}</button><label className='admin-search'><Search /><input placeholder='Search customers, RFQ, invoice…' /></label><div><button className='icon-button'><Bell /></button><span className='admin-avatar'>AD</span><span><strong>Admin</strong><small>Super administrator</small></span></div></header><div className='admin-content'><div className='admin-title'><div><span>Saturday, 25 July 2026</span><h1>{t('adminTitle')}</h1></div><div className='admin-title-actions'><button className='button button-ghost'><Download />Export</button><button className='button button-primary'><FileText />New quotation</button></div></div><section className='admin-metrics'><AdminMetric icon={<Banknote />} label={t('revenue')} value='RM 1.42M' change='+12.8%' /><AdminMetric icon={<MessageSquareText />} label={t('leads')} value='38' change='+6 this week' /><AdminMetric icon={<Boxes />} label={t('stock')} value='126' change='18 machines' /><AdminMetric icon={<Activity />} label={t('attention')} value='11' change='3 overdue' warning /></section><section className='admin-table-panel'><div className='panel-heading'><div><h2>{t('recentEnquiries')}</h2><p>Latest activity across the sales team</p></div><button>{t('viewAll')}<ArrowRight /></button></div><div className='table-scroll'><table><thead><tr><th>RFQ</th><th>{t('customer')}</th><th>{t('product')}</th><th>{t('status')}</th><th>{t('owner')}</th><th>{t('value')}</th></tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={cell}>{index === 3 ? <span className='table-status'><i />{cell}</span> : index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></section></div></main></div>
}

function AdminMetric({ icon, label, value, change, warning }: { icon: ReactNode; label: string; value: string; change: string; warning?: boolean }) { return <article className='admin-metric'><div className={warning ? 'metric-icon warning' : 'metric-icon'}>{icon}</div><div><span>{label}</span><strong>{value}</strong><small className={warning ? 'warning-text' : ''}>{change}</small></div><TrendingUp /></article> }
function Metric({ icon, value, label, accent }: { icon: ReactNode; value: string | number; label: string; accent: string }) { return <article className='portal-metric'><div className={'metric-icon ' + accent}>{icon}</div><div><strong>{value}</strong><span>{label}</span></div><ChevronRight /></article> }
function Service({ icon, number, title, body }: { icon: ReactNode; number: string; title: string; body: string }) { return <article className='service-item'><div className='service-number'>{number}</div><div className='service-icon'>{icon}</div><h3>{title}</h3><p>{body}</p><ChevronRight /></article> }
function Eyebrow({ children, light }: { children: ReactNode; light?: boolean }) { return <div className={light ? 'eyebrow light' : 'eyebrow'}><i />{children}</div> }

function ChatPanel({ t, close }: { t: (key: string) => string; close: () => void }) {
  const [messages, setMessages] = useState<string[]>([])
  function send(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const input = event.currentTarget.elements.namedItem('message') as HTMLInputElement; if (!input.value.trim()) return; setMessages((items) => [...items, input.value.trim()]); event.currentTarget.reset() }
  return <section className='chat-panel'><header><div><span className='agent-avatar'>ET</span><span><strong>{t('chatTitle')}</strong><small><i />{t('chatOnline')}</small></span></div><button onClick={close}><X /></button></header><div className='chat-body'><div className='chat-date'>TODAY</div><div className='agent-message'>{t('chatHello')}</div>{messages.map((message, index) => <div className='user-message' key={message + index}>{message}</div>)}</div><form onSubmit={send}><input name='message' placeholder={t('chatPlaceholder')} /><button><Send /></button></form></section>
}

function LanguageControl({ locale, change }: { locale: Locale; change: (locale: Locale) => void }) { return <div className='language-control'><Languages />{(Object.keys(languageNames) as Locale[]).map((item) => <button className={locale === item ? 'active' : ''} key={item} onClick={() => change(item)}>{languageNames[item]}</button>)}</div> }
function Brand({ light }: { light?: boolean }) { return <span className={light ? 'brand brand-light' : 'brand'}><span className='brand-mark'><i /><i /><i /></span><span><b>eet</b><small>ENGINEERING</small></span></span> }

export default App
