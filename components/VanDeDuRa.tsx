'use client';

import Section from './Section';
import Card from './Card';

export default function VanDeDuRa() {
  return (
    <Section id="van-de-dua-ra" className="border-t border-blue-300 bg-gradient-to-b from-blue-100 via-white to-blue-50 pt-32">
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">
            Vấn đề được đặt ra
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-6">
            Lợi ích kinh tế – Động lực phát triển hay nguồn gốc của mâu thuẫn xã hội?
          </h3>
        </div>

        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <div className="space-y-6 text-justify leading-relaxed">
            <p className="text-slate-700 text-base md:text-lg">
              Trong quá trình phát triển, <strong className="text-blue-900">lợi ích kinh tế</strong> là nguồn động lực mạnh mẽ thúc đẩy sáng tạo, năng suất và tăng trưởng. 
              Tuy nhiên, khi lợi ích bị phân bổ thiếu công bằng, nó lại trở thành 
              nguyên nhân sâu xa của bất bình đẳng, tham nhũng và mâu thuẫn xã hội.
            </p>

            <p className="text-slate-700 text-base md:text-lg">
              Hiện nay, Việt Nam xác định <strong className="text-blue-900">kinh tế tư nhân</strong> là một động lực quan trọng của nền kinh tế. 
              Song cùng với sự phát triển mạnh mẽ của khu vực này, 
              vấn đề <strong className="text-blue-900">điều tiết lợi ích giữa Nhà nước – doanh nghiệp – người lao động</strong> trở nên cấp bách hơn bao giờ hết.
            </p>

            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg border-l-4 border-blue-700 mt-4 shadow-sm">
              <p className="font-semibold text-blue-900 text-base md:text-lg">
                Làm thế nào để lợi ích kinh tế thật sự trở thành động lực phát triển chung, 
                chứ không phải động lực riêng của một nhóm lợi ích?
              </p>
            </div>
          </div>
        </Card>

        <hr className="my-8 border-blue-200" />

        {/* 1. Cơ sở lý luận */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">1. Cơ sở lý luận</h4>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Theo quan điểm của <strong className="text-blue-900">kinh tế chính trị Mác – Lênin</strong>, lợi ích kinh tế là động lực trực tiếp của sự phát triển xã hội, 
              chi phối hành vi của các chủ thể trong nền sản xuất. 
              Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam, tồn tại ba nhóm lợi ích cơ bản:
            </p>
            <ul className="list-disc ml-6 space-y-2 mt-3">
              <li><strong className="text-blue-900">Nhà nước:</strong> đại diện cho lợi ích chung, định hướng và quản lý phát triển.</li>
              <li><strong className="text-blue-900">Doanh nghiệp:</strong> theo đuổi lợi nhuận, hiệu quả và cạnh tranh.</li>
              <li><strong className="text-blue-900">Người lao động:</strong> tìm kiếm việc làm, thu nhập, đời sống ổn định.</li>
            </ul>
            <p className="mt-3">
              Ba nhóm này vừa thống nhất, vừa có mâu thuẫn lợi ích, cần có sự điều tiết của Nhà nước để phát triển hài hòa, bền vững.
            </p>
          </div>
        </Card>

        {/* 2. Vai trò điều tiết của Nhà nước */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">2. Vai trò điều tiết của Nhà nước</h4>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Nhà nước giữ vai trò điều tiết, định hướng và bảo đảm công bằng xã hội, thông qua:</p>
            <ul className="list-disc ml-6 space-y-2 mt-3">
              <li><strong className="text-blue-900">Pháp luật và chính sách kinh tế:</strong> bảo vệ quyền lợi chính đáng, chống độc quyền và gian lận.</li>
              <li><strong className="text-blue-900">Phân phối lại thu nhập:</strong> bằng thuế, đầu tư công và phúc lợi xã hội.</li>
              <li><strong className="text-blue-900">Kiến tạo môi trường cạnh tranh lành mạnh:</strong> để khu vực tư nhân và nhà nước cùng phát triển.</li>
              <li><strong className="text-blue-900">Ngăn ngừa "lợi ích nhóm":</strong> đảm bảo thị trường vận hành minh bạch và hiệu quả.</li>
            </ul>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg border-l-4 border-blue-700 mt-4 shadow-sm">
              <p className="italic text-slate-700">
                Nhà nước không chỉ là "trọng tài công bằng" mà còn là "người dẫn dắt phát triển" theo hướng tiến bộ, công bằng và bền vững.
              </p>
            </div>
          </div>
        </Card>

        {/* 3. Mối quan hệ biện chứng */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            3. Mối quan hệ biện chứng giữa lợi ích cá nhân – tập thể – xã hội
          </h4>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <ul className="list-disc ml-6 space-y-2">
              <li><strong className="text-blue-900">Lợi ích cá nhân:</strong> động lực trực tiếp thúc đẩy sáng tạo và năng suất.</li>
              <li><strong className="text-blue-900">Lợi ích tập thể:</strong> môi trường để cá nhân phát huy năng lực, tạo sức mạnh liên kết.</li>
              <li><strong className="text-blue-900">Lợi ích xã hội:</strong> mục tiêu chung của quốc gia, đảm bảo ổn định và phát triển bền vững.</li>
            </ul>
            <p className="mt-3">
              Nếu coi nhẹ lợi ích cá nhân → mất động lực sáng tạo. <br />
              Nếu coi thường lợi ích xã hội → xuất hiện lợi ích nhóm, bất công và mâu thuẫn xã hội.  
              Do đó, hài hòa ba cấp độ lợi ích chính là điều kiện để tăng trưởng gắn với công bằng.
            </p>
          </div>
        </Card>

        {/* 4. Thực tiễn tại Việt Nam */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">4. Thực tiễn tại Việt Nam</h4>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>Trong những năm gần đây, Việt Nam đã thực hiện nhiều chính sách cụ thể nhằm điều hòa lợi ích kinh tế:</p>
            <ul className="list-disc ml-6 space-y-3 mt-3">
              <li>
                <div>
                  <strong className="text-blue-900">Chính sách tăng lương tối thiểu vùng (2024):</strong> bảo vệ lợi ích người lao động trong bối cảnh lạm phát.
                  <p className="text-xs text-slate-500 mt-1 ml-4">
                    <a 
                      href="https://xaydungchinhsach.chinhphu.vn/toan-van-nghi-dinh-74-2024-nd-cp-quy-dinh-muc-luong-toi-thieu-vung-119240701122135822.htm?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      Xem thêm: Nghị định 74/2024/NĐ-CP quy định mức lương tối thiểu vùng
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong className="text-blue-900">Luật Đất đai (sửa đổi 2024):</strong> minh bạch hóa quyền sử dụng đất, hạn chế trục lợi nhóm.
                  <p className="text-xs text-slate-500 mt-1 ml-4">
                    <a 
                      href="https://phaply.net.vn/tac-dong-tich-cuc-cua-luat-dat-dai-2024-va-nhung-vuong-mac-phap-ly-phat-sinh-can-thao-go-tao-co-so-thuc-day-phat-trien-kinh-te-tu-nhan-ben-vung-1-a259980.html?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      Xem thêm: Tác động tích cực của Luật Đất đai 2024
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong className="text-blue-900">Chiến lược phát triển kinh tế tư nhân đến 2030:</strong> khẳng định khu vực tư nhân là "động lực quan trọng", đồng thời yêu cầu trách nhiệm xã hội và bảo vệ môi trường.
                  <p className="text-xs text-slate-500 mt-1 ml-4">
                    <a 
                      href="https://nhandan.vn/kinh-te-tu-nhan-mot-dong-luc-quan-trong-nhat-cua-nen-kinh-te-quoc-gia-post914929.html?utm_source=chatgpt.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      Xem thêm: Kinh tế tư nhân - một động lực quan trọng nhất của nền kinh tế quốc gia
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <strong className="text-blue-900">Chương trình giảm nghèo bền vững:</strong> thể hiện nỗ lực phân phối lại lợi ích, gắn tăng trưởng với tiến bộ xã hội.
                  <p className="text-xs text-slate-500 mt-1 ml-4">
                    <a 
                      href="https://baochinhphu.vn/chuong-trinh-muc-tieu-quoc-gia-giam-ngheo-ben-vung-2021-2025-102220119152559183.htm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      Xem thêm: Chương trình mục tiêu quốc gia giảm nghèo bền vững 2021-2025
                    </a>
                  </p>
                </div>
              </li>
            </ul>
            <p className="mt-3">
              Những chính sách này cho thấy Nhà nước đang từng bước biến lợi ích kinh tế riêng thành lợi ích chung, bảo đảm "<em>không ai bị bỏ lại phía sau</em>".
            </p>
          </div>
        </Card>

        {/* 5. Kết luận */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h4 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">5. Kết luận</h4>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Lợi ích kinh tế là động lực phát triển mạnh mẽ nhất, nhưng cũng có thể trở thành nguồn gốc mâu thuẫn xã hội nếu thiếu điều tiết hợp lý.
            </p>
            <p>
              Trong bối cảnh hiện nay, việc hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa chính là con đường để:
            </p>
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-700 mt-4 shadow-sm">
              <blockquote className="italic text-slate-700 text-base md:text-lg leading-relaxed">
                Biến lợi ích riêng của từng cá nhân và doanh nghiệp<br />
                Thành <strong className="text-blue-900">động lực phát triển chung của đất nước</strong>,<br />
                Dưới sự <strong className="text-blue-900">điều tiết chủ đạo của Nhà nước</strong> – bảo đảm tăng trưởng đi đôi với công bằng và phát triển bền vững.
              </blockquote>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

