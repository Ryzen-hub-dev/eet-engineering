export type Locale = 'en' | 'ms' | 'zh'
export type Category = 'all' | 'machines' | 'cutting' | 'measuring'

export const languageNames: Record<Locale, string> = {
  en: 'EN',
  ms: 'BM',
  zh: '中文',
}

export const copy: Record<Locale, Record<string, string>> = {
  en: {
    announcement: 'Nationwide delivery, installation and technical support across Malaysia',
    machines: 'Machines', tools: 'Tooling', services: 'Services', about: 'About us', signIn: 'Sign in',
    dashboard: 'Dashboard', heroEyebrow: 'Machinery that keeps Malaysia moving',
    heroTitle: 'Industrial capability, built around your operation.',
    heroBody: 'New and pre-owned machinery, precision tooling, installation and local support from one engineering partner.',
    explore: 'Explore machines', talk: 'Talk to an engineer', inStock: 'Ready stock',
    response: 'Response within 1 business day', support: 'Local technical support',
    trusted: 'Trusted equipment. Practical engineering.',
    trustedBody: 'From first specification to commissioning, our team helps you buy the right capacity with fewer unknowns.',
    browse: 'Available equipment', browseBody: 'Inspect current machines, tooling and workshop essentials.',
    search: 'Search by machine, brand or application', all: 'All products', cutting: 'Cutting tools', measuring: 'Measuring',
    available: 'Available', limited: 'Limited stock', preorder: 'Pre-order', from: 'From', details: 'View details', quote: 'Request quote',
    compare: 'Compare', location: 'Stock location', condition: 'Condition', new: 'New', used: 'Pre-owned',
    why: 'More than a machine supplier', whyBody: 'One accountable team from selection to after-sales support.',
    service1: 'Application-led selection', service1Body: 'We match capacity, material and tolerance to the right machine.',
    service2: 'Delivery & commissioning', service2Body: 'Coordinated transport, placement, setup and operator handover.',
    service3: 'After-sales continuity', service3Body: 'Maintenance planning, parts sourcing and local technical response.',
    process: 'A clearer route to the right machine', step1: 'Share your requirement', step2: 'Review the proposal',
    step3: 'Inspect & confirm', step4: 'Deliver & commission',
    ctaTitle: 'Planning your next production upgrade?', ctaBody: 'Tell us the part, process and target output. We will help shape the equipment shortlist.',
    start: 'Start an enquiry', footerNote: 'Industrial machinery, precision tooling and technical services for Malaysian manufacturers.',
    account: 'Customer account', accountLead: 'Sign in to request quotations, chat with our team and keep every document in one place.',
    loginTab: 'Sign in', registerTab: 'Create account', email: 'Work email', password: 'Password', fullName: 'Full name',
    company: 'Company name', create: 'Create my account', continue: 'Continue', authNote: 'By continuing, you agree to our terms and privacy notice.',
    welcome: 'Good morning', accountOverview: 'Account overview', openEnquiries: 'Open enquiries', activeQuotes: 'Active quotes',
    documents: 'Documents', saved: 'Saved items', recent: 'Recent activity', noEnquiry: 'No enquiries yet',
    noEnquiryBody: 'Browse our current equipment and request a quotation when you find a match.', browseEquipment: 'Browse equipment',
    chatTitle: 'EET sales desk', chatOnline: 'Typically replies within an hour', chatHello: 'Hi, how can our engineering team help today?',
    chatPlaceholder: 'Write a message', send: 'Send', logout: 'Sign out', close: 'Close', spec: 'Key specifications',
    admin: 'Operations', adminTitle: 'Business control centre', revenue: 'Pipeline value', leads: 'Active enquiries',
    stock: 'Stock units', attention: 'Needs attention', inbox: 'Sales inbox', enquiries: 'Enquiries', inventory: 'Inventory',
    accounting: 'Accounting', customers: 'Customers', settings: 'Settings', recentEnquiries: 'Recent enquiries',
    viewAll: 'View all', customer: 'Customer', product: 'Product', status: 'Status', owner: 'Owner', value: 'Value',
    staffAccess: 'Staff access', backStore: 'Back to storefront', demoAdmin: 'Admin preview',
  },
  ms: {
    announcement: 'Penghantaran, pemasangan dan sokongan teknikal di seluruh Malaysia',
    machines: 'Mesin', tools: 'Peralatan', services: 'Perkhidmatan', about: 'Tentang kami', signIn: 'Log masuk',
    dashboard: 'Papan pemuka', heroEyebrow: 'Jentera yang menggerakkan industri Malaysia',
    heroTitle: 'Keupayaan industri, dibina untuk operasi anda.',
    heroBody: 'Mesin baharu dan terpakai, peralatan ketepatan, pemasangan serta sokongan tempatan daripada satu rakan kejuruteraan.',
    explore: 'Lihat mesin', talk: 'Hubungi jurutera', inStock: 'Stok sedia', response: 'Jawapan dalam 1 hari bekerja', support: 'Sokongan teknikal tempatan',
    trusted: 'Peralatan dipercayai. Kejuruteraan praktikal.', trustedBody: 'Daripada spesifikasi hingga pentauliahan, pasukan kami membantu anda membeli kapasiti yang tepat.',
    browse: 'Peralatan tersedia', browseBody: 'Semak mesin, alat dan keperluan bengkel semasa.', search: 'Cari mesin, jenama atau aplikasi',
    all: 'Semua produk', cutting: 'Alat pemotong', measuring: 'Pengukuran', available: 'Tersedia', limited: 'Stok terhad', preorder: 'Pra-tempahan',
    from: 'Daripada', details: 'Lihat butiran', quote: 'Minta sebut harga', compare: 'Bandingkan', location: 'Lokasi stok', condition: 'Keadaan', new: 'Baharu', used: 'Terpakai',
    why: 'Lebih daripada pembekal mesin', whyBody: 'Satu pasukan yang bertanggungjawab daripada pemilihan hingga selepas jualan.',
    service1: 'Pemilihan ikut aplikasi', service1Body: 'Kami padankan kapasiti, bahan dan toleransi dengan mesin yang tepat.',
    service2: 'Penghantaran & pentauliahan', service2Body: 'Pengangkutan, penempatan, persediaan dan serahan operator yang terselaras.',
    service3: 'Sokongan selepas jualan', service3Body: 'Pelan penyelenggaraan, sumber alat ganti dan respons teknikal tempatan.',
    process: 'Laluan lebih jelas kepada mesin yang tepat', step1: 'Kongsi keperluan', step2: 'Semak cadangan', step3: 'Periksa & sahkan', step4: 'Hantar & tauliah',
    ctaTitle: 'Merancang peningkatan pengeluaran?', ctaBody: 'Beritahu kami komponen, proses dan output sasaran. Kami akan membantu membina senarai pendek.',
    start: 'Mulakan pertanyaan', footerNote: 'Jentera industri, peralatan ketepatan dan servis teknikal untuk pengilang Malaysia.',
    account: 'Akaun pelanggan', accountLead: 'Log masuk untuk meminta sebut harga, berbual dengan pasukan kami dan mengurus dokumen.',
    loginTab: 'Log masuk', registerTab: 'Cipta akaun', email: 'E-mel kerja', password: 'Kata laluan', fullName: 'Nama penuh', company: 'Nama syarikat',
    create: 'Cipta akaun saya', continue: 'Teruskan', authNote: 'Dengan meneruskan, anda bersetuju dengan terma dan notis privasi kami.',
    welcome: 'Selamat pagi', accountOverview: 'Ringkasan akaun', openEnquiries: 'Pertanyaan terbuka', activeQuotes: 'Sebut harga aktif', documents: 'Dokumen', saved: 'Disimpan',
    recent: 'Aktiviti terkini', noEnquiry: 'Belum ada pertanyaan', noEnquiryBody: 'Lihat peralatan semasa dan minta sebut harga apabila anda menemui padanan.', browseEquipment: 'Lihat peralatan',
    chatTitle: 'Meja jualan EET', chatOnline: 'Biasanya membalas dalam sejam', chatHello: 'Hai, bagaimana pasukan kejuruteraan kami boleh membantu?', chatPlaceholder: 'Tulis mesej', send: 'Hantar',
    logout: 'Log keluar', close: 'Tutup', spec: 'Spesifikasi utama', admin: 'Operasi', adminTitle: 'Pusat kawalan perniagaan', revenue: 'Nilai saluran', leads: 'Pertanyaan aktif', stock: 'Unit stok',
    attention: 'Perlu perhatian', inbox: 'Peti masuk jualan', enquiries: 'Pertanyaan', inventory: 'Inventori', accounting: 'Perakaunan', customers: 'Pelanggan', settings: 'Tetapan',
    recentEnquiries: 'Pertanyaan terkini', viewAll: 'Lihat semua', customer: 'Pelanggan', product: 'Produk', status: 'Status', owner: 'Pemilik', value: 'Nilai',
    staffAccess: 'Akses staf', backStore: 'Kembali ke kedai', demoAdmin: 'Pratonton pentadbir',
  },
  zh: {
    announcement: '马来西亚全境配送、安装及技术支持', machines: '工业机器', tools: '刀具与工具', services: '服务支持', about: '关于我们', signIn: '登录', dashboard: '控制台',
    heroEyebrow: '驱动马来西亚制造业的可靠设备', heroTitle: '以您的生产目标为中心，构建真正的工业能力。',
    heroBody: '新机、优质二手机、精密刀具、安装调试与本地售后，由同一支工程团队全程负责。', explore: '浏览在售机器', talk: '咨询工程师',
    inStock: '现货设备', response: '一个工作日内回复', support: '本地技术支持', trusted: '可靠设备，务实工程。', trustedBody: '从需求分析到交机投产，我们帮助您以更少的不确定性配置正确产能。',
    browse: '当前在售设备', browseBody: '查看机器、刀具及车间工具的现货与预购信息。', search: '搜索机器、品牌或加工用途', all: '全部产品', cutting: '切削刀具', measuring: '测量工具',
    available: '现货', limited: '库存紧张', preorder: '接受预订', from: '售价', details: '查看详情', quote: '申请报价', compare: '加入比较', location: '库存地点', condition: '设备状态', new: '全新', used: '优质二手',
    why: '不只是机器供应商', whyBody: '从设备选型到售后支持，由一支团队持续负责。', service1: '按应用科学选型', service1Body: '结合产能、材料与公差，为您匹配真正合适的机器。',
    service2: '配送安装与调试', service2Body: '统筹运输、吊装定位、机器设置及操作员交接。', service3: '持续售后保障', service3Body: '保养规划、零件采购与本地技术响应，减少停机时间。',
    process: '更清晰的设备采购流程', step1: '提交生产需求', step2: '审核技术方案', step3: '验机并确认', step4: '交付与调试',
    ctaTitle: '正在规划下一次产能升级？', ctaBody: '告诉我们工件、工艺和目标产量，我们会协助整理合适的设备清单。', start: '发起采购咨询', footerNote: '为马来西亚制造企业提供工业机器、精密刀具与技术服务。',
    account: '客户账户', accountLead: '登录后即可申请报价、与销售团队沟通，并集中管理所有业务文件。', loginTab: '登录', registerTab: '注册账户', email: '工作邮箱', password: '密码',
    fullName: '姓名', company: '公司名称', create: '创建账户', continue: '继续', authNote: '继续即表示您同意服务条款与隐私声明。', welcome: '早上好', accountOverview: '账户概览',
    openEnquiries: '进行中询价', activeQuotes: '有效报价', documents: '业务文件', saved: '收藏产品', recent: '最近动态', noEnquiry: '还没有询价',
    noEnquiryBody: '浏览当前设备，找到合适的机器后即可向销售团队申请报价。', browseEquipment: '浏览设备', chatTitle: 'EET 销售服务台', chatOnline: '通常在一小时内回复',
    chatHello: '您好，请问我们的工程团队可以如何协助您？', chatPlaceholder: '输入消息', send: '发送', logout: '退出登录', close: '关闭', spec: '主要规格',
    admin: '运营后台', adminTitle: '业务管理中心', revenue: '销售管道金额', leads: '有效询价', stock: '库存设备', attention: '待处理事项', inbox: '销售收件箱',
    enquiries: '询价管理', inventory: '库存管理', accounting: '财务管理', customers: '客户管理', settings: '系统设置', recentEnquiries: '最近询价', viewAll: '查看全部',
    customer: '客户', product: '产品', status: '状态', owner: '负责人', value: '预计金额', staffAccess: '员工入口', backStore: '返回商城', demoAdmin: '管理员预览',
  },
}

export interface Product {
  id: string
  category: Exclude<Category, 'all'>
  name: Record<Locale, string>
  summary: Record<Locale, string>
  image: string
  price: string
  status: 'available' | 'limited' | 'preorder'
  condition: 'new' | 'used'
  location: string
  specs: [string, string][]
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'eet-ct460', category: 'machines', featured: true, price: 'RM 128,000', status: 'available', condition: 'new', location: 'Shah Alam, Selangor',
    name: { en: 'EET AxisPro CT-460 CNC Turning Centre', ms: 'Pusat Larik CNC EET AxisPro CT-460', zh: 'EET AxisPro CT-460 CNC 数控车床' },
    summary: { en: 'Production-ready turning with an 8-station turret and compact footprint.', ms: 'Mesin larik sedia pengeluaran dengan turet 8 stesen dan reka bentuk kompak.', zh: '紧凑型生产级数控车床，配备 8 工位刀塔，适合精密批量加工。' },
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=86',
    specs: [['Max. swing', '460 mm'], ['Turning length', '500 mm'], ['Spindle', '4,500 rpm'], ['Controller', 'Fanuc 0i-TF Plus']],
  },
  {
    id: 'eet-vmc850', category: 'machines', price: 'RM 188,000', status: 'limited', condition: 'new', location: 'Puchong, Selangor',
    name: { en: 'TitanMill VMC-850 Machining Centre', ms: 'Pusat Pemesinan TitanMill VMC-850', zh: 'TitanMill VMC-850 立式加工中心' },
    summary: { en: 'High-rigidity vertical machining for general precision production.', ms: 'Pemesinan menegak berketegaran tinggi untuk pengeluaran tepat.', zh: '高刚性立式加工中心，面向模具、零部件及通用精密生产。' },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=86',
    specs: [['X / Y / Z travel', '850 / 500 / 550 mm'], ['Spindle', '10,000 rpm'], ['Tool magazine', '24 ATC'], ['Table load', '600 kg']],
  },
  {
    id: 'eet-rd50', category: 'machines', price: 'RM 42,800', status: 'available', condition: 'used', location: 'Johor Bahru, Johor',
    name: { en: 'RD-50 Hydraulic Radial Drill', ms: 'Gerudi Jejari Hidraulik RD-50', zh: 'RD-50 液压摇臂钻床' },
    summary: { en: 'Inspected pre-owned radial drill with hydraulic clamping.', ms: 'Gerudi jejari terpakai yang diperiksa dengan pengapit hidraulik.', zh: '经检测整备的优质二手摇臂钻，配备液压锁紧系统。' },
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=86',
    specs: [['Drilling capacity', '50 mm'], ['Arm length', '1,600 mm'], ['Spindle travel', '315 mm'], ['Warranty', '3 months']],
  },
  {
    id: 'eet-carbide12', category: 'cutting', price: 'RM 580', status: 'available', condition: 'new', location: 'Shah Alam, Selangor',
    name: { en: '12-piece Carbide End Mill Set', ms: 'Set End Mill Karbida 12 Unit', zh: '12 件套硬质合金立铣刀' },
    summary: { en: 'TiAlN-coated solid carbide cutters for steel and stainless steel.', ms: 'Pemotong karbida pepejal bersalut TiAlN untuk keluli.', zh: 'TiAlN 涂层整体硬质合金刀具，适用于钢材与不锈钢。' },
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=86',
    specs: [['Sizes', '3–12 mm'], ['Flutes', '4'], ['Coating', 'TiAlN'], ['Material', 'Micro-grain carbide']],
  },
  {
    id: 'eet-drill25', category: 'cutting', price: 'RM 328', status: 'preorder', condition: 'new', location: 'Shah Alam, Selangor',
    name: { en: '25-piece Cobalt Drill Index', ms: 'Indeks Gerudi Kobalt 25 Unit', zh: '25 件套含钴麻花钻' },
    summary: { en: 'M35 cobalt drills for demanding workshop use and stainless steel.', ms: 'Gerudi kobalt M35 untuk bengkel dan keluli tahan karat.', zh: 'M35 含钴高速钢钻头，适合车间高强度及不锈钢加工。' },
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=86',
    specs: [['Range', '1–13 mm'], ['Increment', '0.5 mm'], ['Material', 'M35 cobalt HSS'], ['Point', '135° split point']],
  },
  {
    id: 'eet-cal150', category: 'measuring', price: 'RM 145', status: 'available', condition: 'new', location: 'Shah Alam, Selangor',
    name: { en: 'IP67 Digital Caliper 150', ms: 'Angkup Digital IP67 150', zh: 'IP67 数显卡尺 150' },
    summary: { en: 'Coolant-resistant digital measurement for the production floor.', ms: 'Pengukuran digital tahan cecair penyejuk untuk lantai pengeluaran.', zh: 'IP67 防护等级，适合生产现场的稳定数字测量。' },
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=86',
    specs: [['Range', '0–150 mm'], ['Resolution', '0.01 mm'], ['Accuracy', '±0.02 mm'], ['Protection', 'IP67']],
  },
]
