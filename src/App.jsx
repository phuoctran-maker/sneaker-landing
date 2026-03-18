const featuredSneakers = [
  {
    name: 'Nebula Runner X',
    price: '2.190.000đ',
    tag: 'Best seller',
    description: 'Đệm khí đa lớp, upper thoáng khí, hợp chạy bộ và đi phố.',
  },
  {
    name: 'Volt Street 2.0',
    price: '1.790.000đ',
    tag: 'New drop',
    description: 'Phối màu nổi bật, form ôm chân, dễ phối outfit cá tính.',
  },
  {
    name: 'Cloudstep Vintage',
    price: '1.490.000đ',
    tag: 'Limited color',
    description: 'Phong cách retro, phối da lộn + mesh, phù hợp casual hằng ngày.',
  },
];

const gallery = [
  {
    title: 'Drop Neon Pulse',
    image: 'https://images.unsplash.com/photo-1528701800489-20be3c18f4f5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Streetwear Essential',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Monochrome Runner',
    image: 'https://images.unsplash.com/photo-1514986888952-8cd320577b68?auto=format&fit=crop&w=900&q=80',
  },
];

const guarantees = [
  'Miễn phí đổi size trong 30 ngày',
  'Ship toàn quốc trong 2–4 ngày, cho kiểm tra trước khi nhận',
  'Bảo hành keo đế 6 tháng, hỗ trợ vệ sinh cơ bản miễn phí',
];

const reasons = [
  ['Thiết kế bắt mắt', 'Ảnh hero lớn, phối màu neon nổi bật để giữ người xem lâu hơn.'],
  ['Tập trung CTA', 'Nút mua/nghe tư vấn đặt ở các vị trí dễ click, phù hợp landing chạy ads.'],
  ['Tối ưu mobile', 'Layout co giãn đẹp trên điện thoại – kênh chính của khách mua giầy.'],
  ['Dễ mở rộng', 'Có thể cắm thêm form đặt hàng, chat Zalo, Messenger hoặc pixel tracking.'],
];

function App() {
  return (
    <main className="min-h-screen text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 lg:px-10">
        <header className="mb-16 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
              STRIDE LAB
            </p>
            <p className="mt-2 text-sm text-slate-300/80">Landing page giới thiệu shop sneaker bắt mắt</p>
          </div>
          <a
            href="#collection"
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Xem bộ sưu tập
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm font-medium text-emerald-200">
              Sneaker mới nhất • Limited phối màu • Dễ phối outfit
            </span>
            <h1 className="mt-6 max-w-3xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Giầy đẹp, đế êm, chỉ nhìn là muốn đặt ngay.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/85 sm:text-xl">
              Landing page này giúp bạn giới thiệu bộ sưu tập sneaker bắt mắt, tập trung vào
              hình ảnh hero lớn, mô tả công nghệ đệm/upper và CTA rõ ràng để chốt đơn nhanh khi chạy ads.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-emerald-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
              >
                Đặt hàng ngay
              </a>
              <a
                href="#reasons"
                className="rounded-full border border-white/15 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/8"
              >
                Vì sao chọn shop
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {guarantees.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-300/20 via-cyan-500/10 to-violet-400/20 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-white via-slate-100 to-emerald-100 p-8 text-slate-900">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-600">
                      Featured pair
                    </p>
                    <h2 className="mt-3 text-3xl font-black sm:text-4xl">Drift Pulse</h2>
                  </div>
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                    2.290.000đ
                  </span>
                </div>

                <div className="relative mt-10 flex h-72 items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(16,185,129,0.25)_40%,_rgba(14,165,233,0.25)_100%)]">
                  <div className="absolute h-48 w-48 rounded-full bg-emerald-200/50 blur-3xl" />
                  <div className="absolute left-8 top-8 rounded-full border border-slate-900/10 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                    Cushion+ Foam
                  </div>
                  <div className="relative h-32 w-72 -rotate-12 rounded-[4rem_2rem_4rem_2rem] border border-slate-900/10 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 shadow-[0_30px_60px_rgba(15,23,42,0.35)]">
                    <div className="absolute left-8 top-7 h-7 w-24 rounded-full border border-white/10 bg-slate-800" />
                    <div className="absolute right-8 top-10 h-8 w-24 rounded-full bg-emerald-400/80 blur-[2px]" />
                    <div className="absolute bottom-4 left-6 right-6 h-5 rounded-full bg-white/85" />
                    <div className="absolute bottom-6 left-10 h-6 w-32 rounded-full bg-slate-100" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="text-2xl font-black">4.9/5</p>
                    <p className="mt-1 text-slate-600">3.2k đánh giá</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="text-2xl font-black">48h</p>
                    <p className="mt-1 text-slate-600">Ship nội thành</p>
                  </div>
                  <div className="rounded-2xl bg-white/70 p-4">
                    <p className="text-2xl font-black">30 ngày</p>
                    <p className="mt-1 text-slate-600">Đổi size free</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Collection nổi bật
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Những đôi sneaker “chốt đơn” nhiều nhất tuần này
            </h2>
          </div>
          <p className="max-w-xl text-slate-300/75">
            Layout tập trung vào hình ảnh đôi giầy, mô tả công nghệ đệm/upper và CTA rõ ràng
            để khách chỉ cần kéo nhẹ là muốn bấm mua hoặc chat tư vấn.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredSneakers.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/7"
            >
              <span className="inline-flex rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">
                {item.tag}
              </span>
              <div className="mt-5 flex h-44 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
                <div className="h-20 w-44 -rotate-12 rounded-[4rem_1.75rem_4rem_1.75rem] border border-white/10 bg-gradient-to-r from-white via-slate-200 to-emerald-200 shadow-lg shadow-black/30" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{item.name}</h3>
              <p className="mt-2 text-slate-300/75">{item.description}</p>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-xl font-black text-emerald-200">{item.price}</span>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">
                  Tư vấn nhanh
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Lookbook mới
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Ảnh thật từ bộ sưu tập gần nhất</h2>
          </div>
          <p className="max-w-xl text-slate-300/75">Dùng section này để gắn ảnh thật từ studio hoặc khách hàng, giúp tăng độ tin cậy khi chạy ads.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {gallery.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur">
              <img src={item.image} alt={item.title} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Lookbook</p>
                <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="reasons" className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
            Tối ưu cho shop sneaker
          </p>
          <h2 className="mt-4 text-3xl font-black text-white">Một trang landing đủ bắt mắt để khách dừng lại xem</h2>
          <p className="mt-4 leading-8 text-slate-200/80">
            Bạn có thể thêm ảnh thật, feedback khách, bảng size, nút chat, form đặt hàng hoặc
            gắn pixel theo dõi chuyển đổi. Vite + React giúp chạy nhẹ, dễ phát triển tiếp.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {reasons.map(([title, desc]) => (
            <div key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-6">
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-slate-300/75">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-16 pt-6 lg:px-10">
        <div className="rounded-[2rem] border border-emerald-300/15 bg-gradient-to-r from-emerald-500/15 via-cyan-500/10 to-violet-400/15 p-8 backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Liên hệ nhanh
              </p>
              <h2 className="mt-3 text-3xl font-black text-white">Cần tư vấn size, phối màu hoặc đặt giầy nhanh?</h2>
              <p className="mt-3 text-slate-200/80">
                Hotline, Zalo và form đặt hàng luôn sẵn sàng. Nhân viên Stride Lab sẽ phản hồi trong vòng 15 phút.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-100">
                <p>
                  <span className="font-semibold text-white">Hotline:</span>{' '}
                  <a href="tel:0901234567" className="text-emerald-200">0901 234 567</a>
                </p>
                <p>
                  <span className="font-semibold text-white">Zalo:</span>{' '}
                  <a href="https://zalo.me/0901234567" className="text-emerald-200" target="_blank" rel="noreferrer">
                    zalo.me/0901234567
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Email:</span>{' '}
                  <a href="mailto:hello@stridelab.vn" className="text-emerald-200">hello@stridelab.vn</a>
                </p>
              </div>
            </div>

            <form className="space-y-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="name">Họ tên</label>
                <input
                  id="name"
                  name="name"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                  placeholder="Nguyễn Văn A"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="phone">Số điện thoại</label>
                <input
                  id="phone"
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                  placeholder="0901 234 567"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-white" htmlFor="note">Nhu cầu</label>
                <textarea
                  id="note"
                  name="note"
                  rows={3}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300"
                  placeholder="Ví dụ: đặt size 42 mẫu Nebula Runner X"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-emerald-200"
              >
                Gửi yêu cầu
              </button>
              <p className="text-xs text-slate-200/70">
                Bằng cách gửi form, bạn đồng ý để Stride Lab liên hệ lại qua điện thoại/Zalo để tư vấn.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
