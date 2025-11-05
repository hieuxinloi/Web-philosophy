'use client';

import Section from './Section';
import Card from './Card';

export default function TongKet() {
  return (
    <Section id="cong-nghe-minh-bach" className="border-t border-blue-300 bg-gradient-to-b from-blue-100 via-white to-blue-50 pt-32">
      <div className="space-y-12 max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-4">
            Công nghệ & Minh bạch học thuật
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Nguồn tham khảo học thuật */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Nguồn tham khảo học thuật
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg text-slate-700">
              Toàn bộ nội dung được phát triển dựa trên các tư liệu chính thống và học thuật, bao gồm:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4 text-slate-700">
              <li>
                <div>
                  <strong className="text-blue-900">Giáo trình Kinh tế Chính trị Mác – Lênin</strong> – nguồn học liệu nền tảng của môn MLN122.
                  <p className="text-xs text-slate-500 mt-1 ml-4">
                    <a 
                      href="https://drive.google.com/file/d/1kD4-FWb8MXoen6B_DhxJTahx38bnqibN/view" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      Xem thêm: Giáo trình Kinh tế Chính trị Mác – Lênin
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <strong className="text-blue-900">Video "6 nguy cơ lớn đe dọa nền kinh tế Việt Nam"</strong> – kênh 9 Phút Kinh Doanh Đột Phá.
              </li>
              <li>
                <strong className="text-blue-900">Slide giảng dạy chính thức</strong> trên hệ thống FPT của môn Kinh tế chính trị Mác – Lênin.
              </li>
              <li>
                <strong className="text-blue-900">Các bài báo, nghị quyết và văn bản chính sách kinh tế – xã hội</strong> được trích dẫn cụ thể trong từng phần nội dung của website.
              </li>
            </ul>
          </div>
        </Card>

        {/* Công cụ công nghệ hỗ trợ */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Công cụ công nghệ hỗ trợ
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg text-slate-700">
              Trong quá trình soạn lại nội dung, nhóm mình đã ứng dụng các công cụ công nghệ hiện đại nhằm tối ưu hóa quy trình nghiên cứu, trình bày và kiểm chứng thông tin:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4 text-slate-700">
              <li>
                <strong className="text-blue-900">ChatGPT (OpenAI), Gemini:</strong> hỗ trợ gợi ý bố cục bài giảng, diễn đạt học thuật và tổng hợp nội dung từ các nguồn chính thống.
              </li>
              <li>
                <strong className="text-blue-900">Vercel:</strong> nền tảng triển khai website học thuật, đảm bảo tốc độ tải nhanh và tính ổn định cao.
              </li>
              <li>
                <strong className="text-blue-900">Google Scholar và văn kiện gốc:</strong> công cụ kiểm chứng và trích dẫn thông tin chính xác.
              </li>
              <li>
                <strong className="text-blue-900">Figma:</strong> tham khảo giao diện học tập trực quan và thân thiện với người dùng.
              </li>
            </ul>
          </div>
        </Card>

        {/* Cam kết học thuật và đạo đức nội dung */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Cam kết học thuật và đạo đức nội dung
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg font-semibold text-blue-900 mb-3">
              Nhóm em xin cam kết:
            </p>
            <ul className="list-disc ml-6 space-y-3 text-slate-700">
              <li>Không sử dụng nội dung từ nguồn không xác thực hoặc vi phạm bản quyền.</li>
              <li>AI chỉ đóng vai trò hỗ trợ biên tập, không thay thế tư duy, lập luận và phân tích của người biên soạn.</li>
              <li>Mọi thông tin đều được đối chiếu, trích dẫn rõ ràng, đảm bảo tính trung thực và minh bạch học thuật.</li>
            </ul>
          </div>
        </Card>

        {/* Quy trình kiểm chứng nội dung */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Quy trình kiểm chứng nội dung
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg text-slate-700">
              Trước khi công bố, mỗi bài học và phần trình bày đều trải qua quy trình kiểm tra nghiêm ngặt:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4 text-slate-700">
              <li>
                <strong className="text-blue-900">Xác thực nguồn gốc:</strong> chỉ sử dụng tư liệu từ giáo trình, nghị quyết và báo cáo kinh tế chính thức.
              </li>
              <li>
                <strong className="text-blue-900">Đối chiếu chéo:</strong> so sánh kết quả do AI hỗ trợ với quan điểm học giả và tài liệu gốc.
              </li>
              <li>
                <strong className="text-blue-900">Đảm bảo trung thực học thuật:</strong> tuân thủ nguyên tắc trích dẫn, không sao chép nguyên văn nội dung được tạo bởi AI.
              </li>
            </ul>
          </div>
        </Card>

        {/* Ví dụ minh họa về việc sử dụng AI minh bạch */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Ví dụ minh họa về việc sử dụng AI minh bạch
          </h3>
          <div className="space-y-6">
            {/* Ví dụ 1 */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg border-l-4 border-blue-700 shadow-sm">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Ví dụ 1 – Hỗ trợ xây dựng khung bài giảng</h4>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong className="text-blue-900">Prompt:</strong> <span className="text-slate-700">"Gợi ý cấu trúc bài thuyết trình về Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam."</span>
                </p>
                <p>
                  <strong className="text-blue-900">Kết quả:</strong> <span className="text-slate-700">AI đề xuất bố cục gồm khái niệm, mối quan hệ lợi ích, các hình thức mâu thuẫn – thống nhất và ví dụ thực tiễn.</span>
                </p>
                <p>
                  <strong className="text-blue-900">Thực hiện:</strong> <span className="text-slate-700">Nhóm biên tập kiểm tra, hoàn thiện nội dung và bổ sung dẫn chứng từ các chính sách như tăng lương tối thiểu vùng, Luật Đất đai (sửa đổi 2024) và Chiến lược phát triển kinh tế tư nhân.</span>
                </p>
              </div>
            </div>

            {/* Ví dụ 2 */}
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg border-l-4 border-blue-700 shadow-sm">
              <h4 className="text-xl font-semibold text-blue-900 mb-3">Ví dụ 2 – Hỗ trợ tóm tắt học liệu</h4>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong className="text-blue-900">Prompt:</strong> <span className="text-slate-700">"Tóm lược các luận điểm chính trong chương 5 – Quan hệ lợi ích kinh tế của Giáo trình Kinh tế Chính trị Mác – Lênin."</span>
                </p>
                <p>
                  <strong className="text-blue-900">Kết quả:</strong> <span className="text-slate-700">AI cung cấp bản khái quát về các khái niệm lợi ích cá nhân, tập thể, xã hội và mối quan hệ mâu thuẫn – thống nhất.</span>
                </p>
                <p>
                  <strong className="text-blue-900">Thực hiện:</strong> <span className="text-slate-700">Nhóm biên tập đối chiếu lại với giáo trình gốc, bổ sung ví dụ và nhận định phù hợp với bối cảnh Việt Nam hiện nay.</span>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Sáng tạo và giá trị con người */}
        <Card className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
          <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
            Sáng tạo và giá trị con người
          </h3>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p className="text-base md:text-lg text-slate-700">
              AI chỉ là công cụ hỗ trợ sáng tạo, còn giá trị cốt lõi đến từ tư duy phản biện và tri thức của con người.
            </p>
            <p className="text-base md:text-lg text-slate-700">
              Toàn bộ sản phẩm học tập thể hiện sự kết hợp giữa:
            </p>
            <ul className="list-disc ml-6 space-y-3 mt-4 text-slate-700">
              <li>
                <strong className="text-blue-900">Trí tuệ con người:</strong> phân tích, đánh giá và chọn lọc thông tin có giá trị.
              </li>
              <li>
                <strong className="text-blue-900">Trí tuệ nhân tạo:</strong> tối ưu hóa hiệu suất, hỗ trợ sắp xếp và trình bày logic.
              </li>
              <li>
                <strong className="text-blue-900">Tinh thần học thuật độc lập:</strong> duy trì tính khách quan, sáng tạo và nhân văn trong quá trình giảng dạy.
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  );
}
