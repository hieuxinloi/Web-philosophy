'use client';

import Image from 'next/image';
import Section from './Section';
import Card from './Card';
import ReferenceLink from './ReferenceLink';

export default function Phan1_LoiIch() {
  return (
    <Section id="loi-ich" className="border-t border-blue-300 pt-32 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-800">Phần 1: </span>
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent">Lợi ích kinh tế</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* 1. Khái niệm */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
            1. Khái niệm
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900">Lợi ích (chung)</h4>
                <p className="text-slate-700 leading-relaxed">
                  Là sự thỏa mãn nhu cầu của con người. Tuy nhiên, sự thỏa mãn này phải được con người nhận thức 
                  (hiểu rõ mình muốn gì) và phải được đặt trong mối quan hệ xã hội (lợi ích của mình luôn liên quan 
                  đến người khác), ứng với một trình độ phát triển nhất định của xã hội.
                </p>
              </div>
            </Card>

            <Card hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-blue-900">Lợi ích kinh tế (LIKT)</h4>
                <p className="text-slate-700 leading-relaxed">
                  Là lợi ích vật chất, là lợi ích mà các chủ thể thu được khi tham gia vào các hoạt động kinh tế 
                  (sản xuất, trao đổi, phân phối, tiêu dùng). Nó là hình thức biểu hiện của các quan hệ sản xuất và trao đổi.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* 2. Bản chất và Biểu hiện */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
            2. Bản chất và Biểu hiện
          </h3>

          <Card hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-900">Bản chất</h4>
            <p className="text-slate-700 leading-relaxed mb-6">
              Lợi ích kinh tế phản ánh mục đích và động cơ của các quan hệ giữa các chủ thể trong nền sản xuất xã hội.
            </p>
          </Card>

          {/* Biểu hiện LIKT của các chủ thể */}
          <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
            <h4 className="text-xl font-bold mb-6 text-blue-900">Biểu hiện LIKT của các chủ thể</h4>
            <p className="text-slate-700 leading-relaxed mb-6">
              LIKT biểu hiện rất đa dạng, tùy thuộc vào vị trí của chủ thể trong nền kinh tế:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { subject: 'Người lao động', benefit: 'Lợi ích là tiền lương, tiền thưởng và các phúc lợi khác' },
                { subject: 'Chủ doanh nghiệp', benefit: 'Lợi ích là lợi nhuận tối đa' },
                { subject: 'Người cho vay vốn (Ngân hàng)', benefit: 'Lợi ích là lợi tức (tiền lãi)' },
                { subject: 'Người sở hữu đất đai/bất động sản', benefit: 'Lợi ích là địa tô (tiền cho thuê)' },
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white p-4 rounded-lg border-2 border-blue-200 shadow-md hover:border-yellow-400 transition-all">
                  <p className="font-semibold text-blue-900 mb-1">{item.subject}</p>
                  <p className="text-sm text-slate-700">{item.benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* 3. Vai trò của LIKT */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
            3. Vai trò của LIKT
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-blue-900">
                a. Là động lực trực tiếp của chủ thể và các hoạt động kinh tế - xã hội
              </h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                LIKT là "ngọn lửa" động lực mọi chủ thể. Không có LIKT, các hoạt động kinh tế sẽ trở nên trì trệ.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
                  <p className="font-semibold text-blue-900 mb-1">Dẫn chứng (với Doanh nghiệp):</p>
                  <p className="text-slate-700 text-sm mb-3">
                    Động lực lợi nhuận thúc đẩy các tập đoàn như Vingroup, FPT, Thaco... không ngừng đầu tư, 
                    đổi mới công nghệ (sản xuất ô tô điện, phát triển AI), mở rộng thị trường, nâng cao năng lực quản trị.
                  </p>
                  <div className="space-y-2 mt-3">
                    <ReferenceLink
                      href="https://vingroup.net/tin-tuc-su-kien/bai-viet/3229/vingroup-ra-mat-quy-dau-tu-cong-nghe-vinventures"
                      title="Vingroup ra mắt quỹ đầu tư công nghệ VinVentures"
                      source="Tham khảo: Vingroup"
                      description="Vingroup không ngừng đầu tư đổi mới công nghệ để tăng lợi nhuận và phát triển"
                    />
                    <ReferenceLink
                      href="https://vnexpress.net/thu-tuong-de-nghi-thaco-hoa-phat-fpt-tham-gia-cac-du-an-lon-4847740.html"
                      title="Thủ tướng đề nghị Thaco, Hòa Phát, FPT tham gia các dự án lớn"
                      source="Tham khảo: VnExpress"
                      description="Các tập đoàn lớn như FPT, Thaco được khuyến khích đầu tư vào các dự án công nghệ lớn"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm mt-3">
                  <p className="font-semibold text-blue-900 mb-1">Dẫn chứng (với Người lao động):</p>
                  <p className="text-slate-700 text-sm mb-3">
                    Chế độ lương thưởng, cổ phiếu ưu đãi (ESOP) tại các công ty công nghệ là động lực vật chất trực tiếp 
                    để thu hút nhân tài, khuyến khích họ làm việc, sáng tạo, tăng năng suất.
                  </p>
                  <div className="space-y-2 mt-3">
                    <ReferenceLink
                      href="https://luatvietnam.vn/linh-vuc-khac/dai-ngo-nhan-tai-ve-khoa-hoc-cong-nghe-va-doi-moi-sang-tao-883-104870-article.html"
                      title="Đãi ngộ nhân tài về khoa học công nghệ và đổi mới sáng tạo"
                      source="Tham khảo: Luật Việt Nam"
                      description="Chế độ đãi ngộ và lương thưởng là động lực quan trọng để thu hút và giữ chân nhân tài trong lĩnh vực công nghệ"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-blue-900">
                b. Là cơ sở thúc đẩy sự phát triển các lợi ích khác
              </h4>
              <p className="text-slate-700 leading-relaxed mb-4">
                LIKT (vật chất) là nền tảng. Khi kinh tế ổn định, con người mới có điều kiện để mưu cầu các lợi ích cao hơn.
              </p>
              
              <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm mt-4">
                <p className="font-semibold text-blue-900 mb-1">Ví dụ:</p>
                <p className="text-slate-700 text-sm mb-3">
                  Một cá nhân phải có thu nhập (LIKT) ổn định, mới có thể chi trả cho việc học tập nâng cao trình độ 
                  (lợi ích văn hóa), tham gia các hoạt động chính trị (lợi ích chính trị) hoặc các hoạt động từ thiện (lợi ích xã hội).
                </p>
                {/* Ảnh minh họa: Hệ thống kết nối và cơ sở thúc đẩy các lợi ích khác */}
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border-2 border-blue-300 shadow-md mt-4">
                  <Image
                    src="/images/co-so-thuc-day-loi-ich.jpg"
                    alt="Hệ thống kết nối - LIKT là cơ sở thúc đẩy các lợi ích khác"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-2 text-center italic">
                  Hệ thống kết nối và cơ sở - LIKT ổn định tạo nền tảng cho các lợi ích văn hóa, chính trị và xã hội
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
