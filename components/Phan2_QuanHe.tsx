'use client';

import Section from './Section';
import Card from './Card';
import Accordion from './Accordion';

export default function Phan2_QuanHe() {
  const accordionItems = [
    {
      title: 'Quan hệ giữa Người lao động và Người sử dụng lao động',
      content: (
        <div className="space-y-3">
          <p className="text-gray-300 leading-relaxed">
            Đây là quan hệ trung tâm, vừa thống nhất vừa mâu thuẫn. (Đã phân tích chi tiết ở phần trên về PouYuen)
          </p>
        </div>
      ),
    },
    {
      title: 'Quan hệ giữa những người lao động với nhau',
      content: (
        <div className="space-y-3">
          <div className="border-l-4 border-green-500 pl-4 mb-3">
            <p className="font-semibold text-white mb-2">Thống nhất:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Cùng nhau hợp tác trong dây chuyền sản xuất</li>
              <li>• Cùng nhau đoàn kết (thông qua Công đoàn) đòi quyền lợi</li>
            </ul>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white mb-2">Mâu thuẫn:</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Cạnh tranh nhau về vị trí việc làm</li>
              <li>• Cạnh tranh về cơ hội thăng tiến</li>
              <li>• Cạnh tranh về mức lương, thưởng</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: 'Quan hệ giữa Lợi ích cá nhân - Lợi ích nhóm - Lợi ích xã hội',
      content: (
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <p className="font-semibold text-white mb-2">Hài hòa (Lý tưởng):</p>
            <p className="text-gray-300 text-sm">
              Một bác sĩ (cá nhân) mở phòng mạch tư, làm việc giỏi, có thu nhập cao (lợi ích cá nhân), 
              góp phần xây dựng uy tín cho bệnh viện (lợi ích nhóm), đồng thời giảm tải cho y tế công, 
              chăm sóc sức khỏe cộng đồng (lợi ích xã hội).
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="font-semibold text-white mb-2">Mâu thuẫn (Tiêu cực):</p>
            <p className="text-gray-300 text-sm mb-2">
              Hiện tượng "lợi ích nhóm" tiêu cực.
            </p>
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Dẫn chứng:</strong> Các vụ án như Việt Á, "chuyến bay giải cứu". 
              Một số cá nhân, quan chức (nhóm) đã lạm dụng vị trí, chính sách để trục lợi (lợi ích cá nhân, nhóm phi pháp), 
              gây thiệt hại nghiêm trọng cho ngân sách nhà nước và lợi ích của toàn xã hội.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="quan-he" className="border-t border-[#ffd700]/30 pt-32">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Phần 2: </span>
            <span className="text-[#ffd700]">Quan hệ lợi ích kinh tế</span>
          </h2>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* 1. Khái niệm */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            1. Khái niệm
          </h3>
          
          <Card hover>
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Quan hệ LIKT là sự thiết lập những tương tác, mối liên hệ giữa các chủ thể (con người, tổ chức, cộng đồng) 
              trong quá trình hoạt động kinh tế nhằm mục tiêu xác lập LIKT của mình.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg italic">
              Nói đơn giản: Đó là các mối quan hệ "lợi ích" đan xen, ràng buộc lẫn nhau giữa các bên khi cùng tham gia vào nền kinh tế.
            </p>
          </Card>
        </div>

        {/* 2. Sự thống nhất và mâu thuẫn */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            2. Sự thống nhất và mâu thuẫn
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-green-400">a. Sự thống nhất</h4>
              <p className="text-gray-300 mb-3">
                Chúng thống nhất với nhau vì một chủ thể có thể trở thành bộ phận cấu thành của chủ thể khác.
              </p>
              <p className="text-gray-300 mb-4">
                Các chủ thể kinh tế hành động vì mục tiêu chúng hoặc mục tiêu thống nhất với nhau thì các lợi ích kinh tế của các chủ thể đó thống nhất với nhau.
              </p>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-white mb-1">Dẫn chứng (Giữa Doanh nghiệp và Người lao động):</p>
                <p className="text-sm text-gray-300 mb-2">
                  Công ty PouYuen (DN FDI lớn) cần hàng chục ngàn công nhân để sản xuất giày xuất khẩu và tạo ra lợi nhuận. 
                  Ngược lại, hàng chục ngàn công nhân cần công ty để có việc làm và thu nhập ổn định. 
                  Đây là sự thống nhất "cộng sinh", hai bên cùng tồn tại và phát triển.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  <a 
                    href="https://vietstock.vn/2024/03/cong-ty-pouyuen-can-hang-ngan-lao-dong-tuyen-ca-nguoi-tren-40-tuoi-768-1160870.htm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:underline"
                  >
                    Xem thêm: Công ty PouYuen cần hàng ngàn lao động, tuyển cả người trên 40 tuổi
                  </a>
                </p>
              </div>
            </Card>

            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-red-400">b. Sự mâu thuẫn</h4>
              <p className="text-gray-300 mb-4">
                Đây là điều khách quan (tất yếu) trong kinh tế thị trường, vì các chủ thể có mục tiêu LIKT khác nhau, thậm chí đối lập.
              </p>
              <div className="mb-3 text-sm text-gray-400">
                <p className="font-semibold mb-2">Nguyên nhân:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>(1) Nhu cầu cơ bản, sống còn trước hết thuộc về cá nhân</li>
                  <li>(2) Thực hiện lợi ích cá nhân là cơ sở để thực hiện lợi ích khác</li>
                </ul>
              </div>
              <div className="border-l-4 border-red-500 pl-4 mt-4">
                <p className="font-semibold text-white mb-1">Dẫn chứng 1 (Giữa Doanh nghiệp và Người lao động):</p>
                <p className="text-sm text-gray-300 mb-2">
                  Cũng tại PouYuen, mâu thuẫn nảy sinh khi đàm phán về lương tối thiểu, giờ làm thêm, tiền thưởng Tết. 
                  Doanh nghiệp muốn giữ chi phí lao động ở mức thấp để tăng lợi nhuận, còn công nhân (thông qua Công đoàn) 
                  muốn tăng lương, thưởng. Đây là mâu thuẫn trong việc phân chia kết quả.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  <a 
                    href="https://www.reuters.com/article/world/vietnam-hit-by-rare-strike-at-major-footwear-factory-idUSKBN0MR0J6/?utm_source=chatgpt.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:underline"
                  >
                    Xem thêm: Vietnam hit by rare strike at major footwear factory
                  </a>
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4 mt-4">
                <p className="font-semibold text-white mb-1">Dẫn chứng 2 (Giữa các nhóm lợi ích):</p>
                <p className="text-sm text-gray-300 mb-2">
                  Mâu thuẫn giữa các hãng taxi truyền thống (Vinasun, Mai Linh) và các hãng taxi công nghệ (Grab, Be). 
                  Các hãng truyền thống vận động hành lang chính sách để siết chặt quản lý taxi công nghệ (coi là cạnh tranh không bình đẳng), 
                  trong khi các hãng công nghệ lại muốn một môi trường pháp lý thông thoáng hơn.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  <a 
                    href="https://www.brandsvietnam.com/13093-cuoc-dua-vong-2-giua-taxi-cong-nghe-va-truyen-thong?utm_source=chatgpt.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#ffd700] hover:underline"
                  >
                    Xem thêm: Cuộc đua vòng 2 giữa taxi công nghệ và truyền thống
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* 3. Một số quan hệ LIKT cơ bản */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            3. Một số quan hệ LIKT cơ bản
          </h3>
          
          <Accordion items={accordionItems} />
        </div>

        {/* 4. Nhân tố ảnh hưởng */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            4. Nhân tố ảnh hưởng
          </h3>

          <div className="space-y-6">
            {/* Nhân tố 1 */}
            <Card>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#ffd700]">a. Trình độ phát triển của lực lượng sản xuất</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    LLSX càng cao, năng suất lao động càng lớn, "miếng bánh" kinh tế càng to, việc phân chia LIKT càng dễ dàng, mâu thuẫn giảm bớt.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Dẫn chứng:</strong> Cuộc cách mạng 4.0 (LLSX) tạo ra nhóm lao động tri thức (IT, AI) có LIKT (thu nhập) cao vượt trội so với lao động giản đơn.
                  </p>
                </div>
              </div>
            </Card>

            {/* Nhân tố 2 */}
            <Card>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#ffd700]">b. Địa vị của chủ thể trong hệ thống quan hệ sản xuất xã hội</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Ai nắm giữ tư liệu sản xuất chủ yếu sẽ có vai trò quyết định trong việc phân phối LIKT.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Dẫn chứng:</strong> Trong một công ty cổ phần, cổ đông (chủ sở hữu vốn) nhận lợi tức, ban giám đốc nhận lương và thưởng hiệu suất, còn người lao động nhận tiền công. Địa vị khác nhau dẫn đến phương thức nhận LIKT khác nhau.
                  </p>
                </div>
              </div>
            </Card>

            {/* Nhân tố 3 */}
            <Card>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#ffd700]">c. Chính sách phân phối thu nhập của nhà nước</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Nhà nước sử dụng các công cụ như thuế, trợ cấp, an sinh xã hội để điều tiết và phân phối lại thu nhập, tạo sự công bằng hơn trong xã hội.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Dẫn chứng:</strong> Thuế thu nhập cá nhân lũy tiến (người có thu nhập cao đóng thuế nhiều hơn) và các chương trình hỗ trợ người nghèo, bảo hiểm xã hội, y tế công giúp giảm bớt khoảng cách giàu nghèo, đảm bảo người có thu nhập thấp vẫn có cơ hội tiếp cận các dịch vụ cơ bản.
                  </p>
                </div>
              </div>
            </Card>

            {/* Nhân tố 4 */}
            <Card>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-[#ffd700]">d. Hội nhập kinh tế quốc tế</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    Vừa mở ra cơ hội vừa tạo ra thách thức.
                  </p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700]">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    <strong className="text-white">Dẫn chứng:</strong> Cơ hội: EVFTA giúp thuế quan về 0%, tạo LIKT khổng lồ cho các doanh nghiệp xuất khẩu cá tra, tôm, dệt may của Việt Nam vào thị trường EU. Thách thức: Ngành chăn nuôi heo trong nước (lợi ích nhóm nông dân) gặp áp lực cạnh tranh gay gắt từ thịt heo châu Âu giá rẻ, có thể làm giảm LIKT của họ.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* 5. Phương thức thực hiện LIKT */}
        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-[#ffd700]">
            5. Phương thức thực hiện LIKT
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-[#ffd700]">Thực hiện LIKT theo nguyên tắc thị trường</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Đây là phương thức chủ yếu. LIKT được xác lập thông qua cạnh tranh, cung - cầu, giá cả tự do.
              </p>
              <div className="bg-[#1a1a1a] p-3 rounded border-l-4 border-[#ffd700] mt-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Ví dụ:</strong> Giá một căn hộ chung cư được quyết định bởi cung (số lượng dự án) 
                  và cầu (nhu cầu mua nhà). Lợi nhuận của chủ đầu tư phụ thuộc vào giá bán thị trường.
                </p>
              </div>
            </Card>

            <Card hover>
              <h4 className="text-xl font-bold mb-4 text-[#ffd700]">Thực hiện LIKT theo chính sách Nhà nước và vai trò của tổ chức xã hội</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Nhà nước can thiệp để điều tiết những LIKT mang tính đặc thù, hoặc sửa chữa khuyết tật thị trường.
              </p>
              <div className="bg-[#1a1a1a] p-3 rounded border-l-4 border-[#ffd700] mt-4">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Ví dụ:</strong> Nhà nước quy định giá trần cho vé máy bay, giá sàn cho lúa gạo 
                  (để bảo vệ nông dân), và quy định giá điện, nước (hàng hóa thiết yếu) để đảm bảo an sinh, 
                  chứ không thả nổi hoàn toàn theo thị trường.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
