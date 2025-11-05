'use client';

import Section from './Section';
import Card from './Card';

export default function Phan3_NhaNuoc() {
  const roles = [
    {
      title: 'Bảo vệ lợi ích hợp pháp',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Nhà nước tạo ra "sân chơi" công bằng và các điều kiện nền tảng cho các chủ thể tìm kiếm lợi ích.
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Giữ vững ổn định chính trị - xã hội:</p>
              <p className="text-sm text-slate-700">Đây là điều kiện tiên quyết.</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Xây dựng khung khổ pháp lý thông thoáng, minh bạch:</p>
              <p className="text-sm text-slate-700 mb-2">
                <strong className="text-blue-900">Dẫn chứng:</strong> Việc ban hành Luật Doanh nghiệp, Luật Đầu tư... 
                liên tục được sửa đổi theo hướng đơn giản hóa thủ tục hành chính, bảo vệ quyền sở hữu trí tuệ. 
                Điều này tạo niềm tin, bảo vệ LIKT hợp pháp của nhà đầu tư, khuyến khích họ làm giàu.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Đầu tư vào kết cấu hạ tầng:</p>
              <p className="text-sm text-slate-700">
                <strong className="text-blue-900">Dẫn chứng:</strong> Các dự án trọng điểm quốc gia như Cao tốc Bắc-Nam, 
                Sân bay Long Thành... là Nhà nước dùng ngân sách để đầu tư vào hạ tầng. Hạ tầng tốt giúp giảm chi phí logistics, 
                tăng tốc độ lưu thông hàng hóa, qua đó gián tiếp làm tăng LIKT cho toàn bộ doanh nghiệp và xã hội.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Điều hòa lợi ích KT-XH',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Nhà nước cần có các chính sách, trước hết là chính sách phân phối thu nhập nhằm đảm bảo hài hòa các lợi ích kinh tế.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Đây là chức năng thể hiện rõ nhất định hướng Xã hội chủ nghĩa, nhằm giảm bất bình đẳng, phân hóa giàu nghèo.
          </p>
          
          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-700 shadow-sm">
            <p className="font-semibold mb-2 text-blue-900">Vấn đề:</p>
            <p className="text-sm text-slate-700 mb-4">
              Thị trường tự do luôn có xu hướng "người giàu càng giàu, người nghèo càng nghèo", gây ra mâu thuẫn xã hội.
            </p>
            <p className="font-semibold mb-2 text-blue-900">Giải pháp:</p>
            <p className="text-sm text-slate-700">Nhà nước thực hiện chính sách phân phối lại thu nhập.</p>
          </div>

          <div className="space-y-3 mt-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Dẫn chứng (Công cụ Thuế):</p>
              <p className="text-sm text-slate-700">
                Áp dụng biểu Thuế thu nhập cá nhân lũy tiến (người có thu nhập càng cao, thuế suất càng cao) 
                và Thuế tiêu thụ đặc biệt (đánh vào hàng xa xỉ).
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Dẫn chứng (Công cụ Chi Ngân sách):</p>
              <p className="text-sm text-slate-700 mb-2">Dùng tiền thuế thu được để chi cho an sinh xã hội:</p>
              <ul className="text-sm text-slate-700 space-y-1 ml-4 list-disc">
                <li>Chương trình mục tiêu quốc gia giảm nghèo bền vững (VD: Chương trình 135 hỗ trợ các xã đặc biệt khó khăn).</li>
                <li>Trợ cấp y tế (BHYT cho người nghèo), giáo dục (miễn giảm học phí).</li>
                <li>Trợ cấp thất nghiệp, lương hưu.</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Kiểm soát quan hệ lợi ích tiêu cực',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Nhà nước phải là "trọng tài" nghiêm khắc, chống lại những hành vi tìm kiếm lợi ích bất hợp pháp, gây hại cho xã hội.
          </p>

          <div className="space-y-3 mt-4">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Khuyến khích làm giàu hợp pháp:</p>
              <p className="text-sm text-slate-700 mb-2">
                <strong className="text-blue-900">Dẫn chứng:</strong> Thủ tướng Chính phủ phát động phong trào "Toàn dân thi đua làm giàu" nhằm khuyến khích người dân làm giàu hợp pháp, tạo động lực phát triển kinh tế, góp phần xây dựng đất nước giàu mạnh.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                <a 
                  href="https://xaydungchinhsach.chinhphu.vn/thu-tuong-phat-dong-toan-dan-thi-dua-lam-giau-119250518111151187.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Xem thêm: Thủ tướng phát động toàn dân thi đua làm giàu
                </a>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Hoàn thiện pháp luật và thực thi nghiêm minh:</p>
              <p className="text-sm text-slate-700 mb-2">
                <strong className="text-blue-900">Dẫn chứng (Chống tham nhũng, "lợi ích nhóm"):</strong> Cuộc chiến chống tham nhũng quyết liệt 
                trong những năm qua, xử lý hàng loạt đại án (FLC, Tân Hoàng Minh, Vạn Thịnh Phát...) là hành động kiểm soát các LIKT phi pháp, 
                lạm dụng chức quyền, nhằm làm trong sạch thị trường và bảo vệ LIKT của xã hội.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                <a 
                  href="https://btllang.mod.gov.vn/tin-tuc/tin-tong-hop/5468-chong-tham-nhung-cuoc-chien-dau-kien-tri-quyet-liet-va-hieu-qua.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Xem thêm: Chống tham nhũng - cuộc chiến đấu kiên trì, quyết liệt và hiệu quả
                </a>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 border-l-4 border-blue-700 pl-4 rounded-r-lg shadow-sm">
              <p className="font-semibold text-blue-900 mb-1">Tuyên truyền, giáo dục:</p>
              <p className="text-sm text-slate-700 mb-2">
                <strong className="text-blue-900">Dẫn chứng:</strong> Nghị quyết số 68-NQ/TW của Bộ Chính trị về phát triển kinh tế tư nhân nhấn mạnh việc "đề cao đạo đức kinh doanh, phát huy trách nhiệm xã hội" của doanh nhân, doanh nghiệp. Đây là định hướng quan trọng để xây dựng đội ngũ doanh nhân có đạo đức, văn hóa kinh doanh, bản lĩnh, trí tuệ, tích cực thực hiện trách nhiệm xã hội.
              </p>
              <p className="text-xs text-slate-500 mt-1">
                <a 
                  href="https://tapchicongthuong.vn/nghi-quyet-so-68-nq-tw-voi-viec-de-cao-dao-duc-kinh-doanh--phat-huy-trach-nhiem-xa-hoi-cua-doanh-nhan--doanh-nghiep-trong-khu-vuc-kinh-te-tu-nhan-142480.htm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Xem thêm: Nghị quyết số 68-NQ/TW về đạo đức kinh doanh và trách nhiệm xã hội
                </a>
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Giải quyết mâu thuẫn',
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">
            Khi mâu thuẫn đã nảy sinh và trở nên gay gắt, Nhà nước phải trực tiếp can thiệp để hòa giải.
          </p>

          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg mt-4 border-l-4 border-blue-700 shadow-sm">
            <p className="font-semibold mb-2 text-blue-900">Yêu cầu:</p>
            <p className="text-sm text-slate-700 mb-4">
              Các cơ quan chức năng phải thường xuyên quan tâm, phát hiện mâu thuẫn từ sớm và chuẩn bị chu đáo các giải pháp.
            </p>
            <p className="font-semibold mb-2 text-blue-900">Nguyên tắc giải quyết:</p>
            <p className="text-sm text-slate-700">
              Đối thoại, thương lượng, và "đặt lợi ích đất nước lên trên hết".
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-4 rounded-lg mt-4 border-2 border-blue-300 shadow-md">
            <h5 className="font-semibold mb-3 text-blue-900">Dẫn chứng thực tiễn:</h5>
            <p className="text-sm text-slate-700 mb-3">
              Ví dụ: Khi xảy ra một vụ đình công của công nhân tại một nhà máy (mâu thuẫn giữa người lao động và chủ sử dụng lao động).
            </p>
            
            <div className="space-y-2 mb-3">
              <p className="text-sm font-semibold text-blue-900">Vai trò của Nhà nước:</p>
              <p className="text-sm text-slate-700">
                Sở Lao động - Thương binh & Xã hội, Liên đoàn Lao động địa phương, và chính quyền sẽ ngay lập tức vào cuộc.
              </p>
            </div>
            
            <div className="space-y-2 mb-3">
              <p className="text-sm font-semibold text-blue-900">Hành động:</p>
              <p className="text-sm text-slate-700">
                Tổ chức một cuộc đối thoại ba bên (Chủ doanh nghiệp - Đại diện Công đoàn/Công nhân - Cơ quan Nhà nước). 
                Cơ quan Nhà nước đóng vai trò trung gian, lắng nghe, hòa giải, và yêu cầu các bên hành động dựa trên cơ sở pháp luật 
                (Bộ luật Lao động) để tìm ra tiếng nói chung (nhân nhượng) và sớm ổn định sản xuất.
              </p>
            </div>
            
            <p className="text-xs text-slate-500 mt-3">
              <a 
                href="https://thoibaotaichinhvietnam.vn/tin-vao-co-do-dat-nuoc-100645.html?utm_source=chatgpt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Xem thêm: Tin vào cơ đồ đất nước
              </a>
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="nha-nuoc" className="border-t border-blue-300 bg-gradient-to-b from-blue-100 via-white to-blue-50 pt-32">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-slate-800">Phần 3: </span>
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent">Vai trò của Nhà nước</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* 4 tiểu mục */}
        <div className="space-y-12">
          {roles.map((role, index) => (
            <Card key={index} hover className="bg-white border-2 border-blue-300 shadow-lg rounded-xl">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
                {index + 1}. {role.title}
              </h3>
              {role.content}
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
