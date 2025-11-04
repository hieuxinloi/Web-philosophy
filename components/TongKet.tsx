'use client';

import Section from './Section';
import Card from './Card';

export default function TongKet() {
  return (
    <Section id="cong-nghe-minh-bach" className="border-t border-[#ffd700]/30 pt-32">
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffd700]">
            Công nghệ & Minh bạch học thuật
          </h2>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* Nguồn tham khảo học thuật */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Nguồn tham khảo học thuật
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg">
              Toàn bộ nội dung được phát triển dựa trên các tư liệu chính thống và học thuật, bao gồm:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <div>
                  <strong className="text-white">Giáo trình Kinh tế Chính trị Mác – Lênin</strong> – nguồn học liệu nền tảng của môn MLN122.
                  <p className="text-xs text-gray-400 mt-1 ml-4">
                    <a 
                      href="https://drive.google.com/file/d/1kD4-FWb8MXoen6B_DhxJTahx38bnqibN/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#ffd700] hover:underline"
                    >
                      Xem thêm: Giáo trình Kinh tế Chính trị Mác – Lênin
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-white">Video "6 nguy cơ lớn đe dọa nền kinh tế Việt Nam"</strong> – kênh 9 Phút Kinh Doanh Đột Phá.
              </li>
              <li>
                <strong className="text-white">Slide giảng dạy chính thức</strong> trên hệ thống FPT của môn Kinh tế chính trị Mác – Lênin.
              </li>
              <li>
                <strong className="text-white">Các bài báo, nghị quyết và văn bản chính sách kinh tế – xã hội</strong> được trích dẫn cụ thể trong từng phần nội dung của website.
              </li>
            </ul>
          </div>
        </Card>

        {/* Công cụ hỗ trợ công nghệ */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Công cụ hỗ trợ công nghệ
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg">
              Trong quá trình biên soạn và phát triển nội dung, nhóm biên tập đã ứng dụng các công cụ công nghệ hiện đại nhằm tối ưu hóa quy trình nghiên cứu, trình bày và kiểm chứng thông tin:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <strong className="text-white">ChatGPT (OpenAI), Gemini:</strong> hỗ trợ gợi ý bố cục bài giảng, diễn đạt học thuật và tổng hợp nội dung từ các nguồn chính thống.
              </li>
              <li>
                <strong className="text-white">Vercel:</strong> nền tảng triển khai website học thuật, đảm bảo tốc độ tải nhanh và tính ổn định cao.
              </li>
              <li>
                <strong className="text-white">Google Scholar và văn kiện gốc:</strong> công cụ kiểm chứng và trích dẫn thông tin chính xác.
              </li>
              <li>
                <strong className="text-white">Figma:</strong> phục vụ thiết kế giao diện học tập trực quan và thân thiện với người dùng.
              </li>
            </ul>
          </div>
        </Card>

        {/* Cam kết học thuật và đạo đức nội dung */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Cam kết học thuật và đạo đức nội dung
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg font-semibold text-white mb-3">
              Nhóm em xin cam kết:
            </p>
            <ul className="list-disc ml-6 space-y-3">
              <li>Không sử dụng nội dung từ nguồn không xác thực hoặc vi phạm bản quyền.</li>
              <li>AI chỉ đóng vai trò hỗ trợ biên tập, không thay thế tư duy, lập luận và phân tích của người biên soạn.</li>
              <li>Mọi thông tin đều được đối chiếu, trích dẫn rõ ràng, đảm bảo tính trung thực và minh bạch học thuật.</li>
            </ul>
          </div>
        </Card>

        {/* Quy trình kiểm chứng nội dung */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Quy trình kiểm chứng nội dung
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg">
              Trước khi công bố, mỗi bài học và phần trình bày đều trải qua quy trình kiểm tra nghiêm ngặt:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <strong className="text-white">Xác thực nguồn gốc:</strong> chỉ sử dụng tư liệu từ giáo trình, nghị quyết và báo cáo kinh tế chính thức.
              </li>
              <li>
                <strong className="text-white">Đối chiếu chéo:</strong> so sánh kết quả do AI hỗ trợ với quan điểm học giả và tài liệu gốc.
              </li>
              <li>
                <strong className="text-white">Đảm bảo trung thực học thuật:</strong> tuân thủ nguyên tắc trích dẫn, không sao chép nguyên văn nội dung được tạo bởi AI.
              </li>
            </ul>
          </div>
        </Card>

        {/* Ví dụ minh họa về việc sử dụng AI minh bạch */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Ví dụ minh họa về việc sử dụng AI minh bạch
          </h3>
          <div className="space-y-6">
            {/* Ví dụ 1 */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-[#ffd700]">
              <h4 className="text-xl font-semibold text-white mb-3">Ví dụ 1 – Hỗ trợ xây dựng khung bài giảng</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Prompt:</strong> "Gợi ý cấu trúc bài thuyết trình về Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam."
                </p>
                <p>
                  <strong className="text-white">Kết quả:</strong> AI đề xuất bố cục gồm khái niệm, mối quan hệ lợi ích, các hình thức mâu thuẫn – thống nhất và ví dụ thực tiễn.
                </p>
                <p>
                  <strong className="text-white">Thực hiện:</strong> Nhóm biên tập kiểm tra, hoàn thiện nội dung và bổ sung dẫn chứng từ các chính sách như tăng lương tối thiểu vùng, Luật Đất đai (sửa đổi 2024) và Chiến lược phát triển kinh tế tư nhân.
                </p>
              </div>
            </div>

            {/* Ví dụ 2 */}
            <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-[#ffd700]">
              <h4 className="text-xl font-semibold text-white mb-3">Ví dụ 2 – Hỗ trợ tóm tắt học liệu</h4>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Prompt:</strong> "Tóm lược các luận điểm chính trong chương 5 – Quan hệ lợi ích kinh tế của Giáo trình Kinh tế Chính trị Mác – Lênin."
                </p>
                <p>
                  <strong className="text-white">Kết quả:</strong> AI cung cấp bản khái quát về các khái niệm lợi ích cá nhân, tập thể, xã hội và mối quan hệ mâu thuẫn – thống nhất.
                </p>
                <p>
                  <strong className="text-white">Thực hiện:</strong> Nhóm biên tập đối chiếu lại với giáo trình gốc, bổ sung ví dụ và nhận định phù hợp với bối cảnh Việt Nam hiện nay.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sáng tạo và giá trị con người */}
        <Card>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffd700]">
            Sáng tạo và giá trị con người
          </h3>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p className="text-base md:text-lg">
              AI chỉ là công cụ hỗ trợ sáng tạo, còn giá trị cốt lõi đến từ tư duy phản biện và tri thức của con người.
            </p>
            <p className="text-base md:text-lg">
              Toàn bộ sản phẩm học tập thể hiện sự kết hợp giữa:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4">
              <li>
                <strong className="text-white">Trí tuệ con người:</strong> phân tích, đánh giá và chọn lọc thông tin có giá trị.
              </li>
              <li>
                <strong className="text-white">Trí tuệ nhân tạo:</strong> tối ưu hóa hiệu suất, hỗ trợ sắp xếp và trình bày logic.
              </li>
              <li>
                <strong className="text-white">Tinh thần học thuật độc lập:</strong> duy trì tính khách quan, sáng tạo và nhân văn trong quá trình giảng dạy.
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  );
}
