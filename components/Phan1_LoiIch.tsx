'use client';

import Image from 'next/image';
import Section from './Section';
import Card from './Card';
import ReferenceLink from './ReferenceLink';

export default function Phan1_LoiIch() {
  return (
    <Section id="loi-ich" className="border-t border-[#ffd700]/30 pt-32">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Phần 1: </span>
            <span className="text-[#ffd700]">Lợi ích kinh tế</span>
          </h2>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* A. Khái niệm */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            A. Khái niệm
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#ffd700]">Lợi ích (chung)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Là sự thỏa mãn nhu cầu của con người. Tuy nhiên, sự thỏa mãn này phải được con người nhận thức 
                  (hiểu rõ mình muốn gì) và phải được đặt trong mối quan hệ xã hội (lợi ích của mình luôn liên quan 
                  đến người khác), ứng với một trình độ phát triển nhất định của xã hội.
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-[#ffd700]">Lợi ích kinh tế (LIKT)</h4>
                <p className="text-gray-300 leading-relaxed">
                  Là lợi ích vật chất, là lợi ích mà các chủ thể thu được khi tham gia vào các hoạt động kinh tế 
                  (sản xuất, trao đổi, phân phối, tiêu dùng). Nó là hình thức biểu hiện của các quan hệ sản xuất và trao đổi.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* B. Bản chất và Biểu hiện */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            B. Bản chất và Biểu hiện
          </h3>

          <Card hover>
            <h4 className="text-xl font-bold mb-4 text-[#ffd700]">Bản chất</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              LIKT phản ánh mục đích và động cơ của các hoạt động kinh tế. Con người tham gia vào lao động, 
              sản xuất, kinh doanh trước hết là vì LIKT của mình.
            </p>
          </Card>

          {/* Biểu hiện LIKT của các chủ thể */}
          <Card>
            <h4 className="text-xl font-bold mb-6 text-[#ffd700]">Biểu hiện LIKT của các chủ thể</h4>
            <p className="text-gray-300 leading-relaxed mb-6">
              LIKT biểu hiện rất đa dạng, tùy thuộc vào vị trí của chủ thể trong nền kinh tế:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { subject: 'Người lao động', benefit: 'Lợi ích là tiền lương, tiền thưởng và các phúc lợi khác' },
                { subject: 'Chủ doanh nghiệp', benefit: 'Lợi ích là lợi nhuận tối đa' },
                { subject: 'Người cho vay vốn (Ngân hàng)', benefit: 'Lợi ích là lợi tức (tiền lãi)' },
                { subject: 'Người sở hữu đất đai/bất động sản', benefit: 'Lợi ích là địa tô (tiền cho thuê)' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#1a1a1a] p-4 rounded border border-[#ffd700]/20">
                  <p className="font-semibold text-white mb-1">{item.subject}</p>
                  <p className="text-sm text-gray-300">{item.benefit}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* C. Vai trò của LIKT */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            C. Vai trò của LIKT
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-[#ffd700]">
                a. Là động lực trực tiếp của các hoạt động kinh tế
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                LIKT là "ngọn lửa" thúc đẩy mọi chủ thể. Không có LIKT, các hoạt động kinh tế sẽ trở nên trì trệ.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="border-l-4 border-[#ffd700] pl-4">
                  <p className="font-semibold text-white mb-1">Dẫn chứng (với Doanh nghiệp):</p>
                  <p className="text-gray-300 text-sm mb-3">
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
                
                <div className="border-l-4 border-[#ffd700] pl-4">
                  <p className="font-semibold text-white mb-1">Dẫn chứng (với Người lao động):</p>
                  <p className="text-gray-300 text-sm mb-3">
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

            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-[#ffd700]">
                b. Là cơ sở thúc đẩy sự phát triển các lợi ích khác
              </h4>
              <p className="text-gray-300 leading-relaxed mb-4">
                LIKT (vật chất) là nền tảng. Khi kinh tế ổn định, con người mới có điều kiện để mưu cầu các lợi ích cao hơn.
              </p>
              
              <div className="border-l-4 border-[#ffd700] pl-4 mt-4">
                <p className="font-semibold text-white mb-1">Ví dụ:</p>
                <p className="text-gray-300 text-sm mb-3">
                  Một cá nhân phải có thu nhập (LIKT) ổn định, mới có thể chi trả cho việc học tập nâng cao trình độ 
                  (lợi ích văn hóa), tham gia các hoạt động chính trị (lợi ích chính trị) hoặc các hoạt động từ thiện (lợi ích xã hội).
                </p>
                {/* Ảnh minh họa: Hệ thống kết nối và cơ sở thúc đẩy các lợi ích khác */}
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-[#3a3a3a] mt-4">
                  <Image
                    src="/images/co-so-thuc-day-loi-ich.jpg"
                    alt="Hệ thống kết nối - LIKT là cơ sở thúc đẩy các lợi ích khác"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center italic">
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
