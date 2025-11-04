'use client';

import Section from './Section';
import Card from './Card';

export default function Phan3_NhaNuoc() {
  const roles = [
    {
      title: 'Bảo vệ lợi ích hợp pháp',
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Nhà nước tạo ra "sân chơi" công bằng và các điều kiện nền tảng cho các chủ thể tìm kiếm lợi ích.
          </p>
          
          <div className="space-y-3 mt-4">
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Giữ vững ổn định chính trị - xã hội:</p>
              <p className="text-sm text-gray-300">Đây là điều kiện tiên quyết.</p>
            </div>
            
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Xây dựng khung khổ pháp lý thông thoáng, minh bạch:</p>
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-white">Dẫn chứng:</strong> Việc ban hành Luật Doanh nghiệp, Luật Đầu tư... 
                liên tục được sửa đổi theo hướng đơn giản hóa thủ tục hành chính, bảo vệ quyền sở hữu trí tuệ. 
                Điều này tạo niềm tin, bảo vệ LIKT hợp pháp của nhà đầu tư, khuyến khích họ làm giàu.
              </p>
            </div>
            
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Đầu tư vào kết cấu hạ tầng:</p>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Dẫn chứng:</strong> Các dự án trọng điểm quốc gia như Cao tốc Bắc-Nam, 
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
          <p className="text-gray-300 leading-relaxed">
            Đây là chức năng thể hiện rõ nhất định hướng Xã hội chủ nghĩa, nhằm giảm bất bình đẳng, phân hóa giàu nghèo.
          </p>
          
          <div className="bg-[#1a1a1a] p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2 text-white">Vấn đề:</p>
            <p className="text-sm text-gray-300 mb-4">
              Thị trường tự do luôn có xu hướng "người giàu càng giàu, người nghèo càng nghèo", gây ra mâu thuẫn xã hội.
            </p>
            <p className="font-semibold mb-2 text-white">Giải pháp:</p>
            <p className="text-sm text-gray-300">Nhà nước thực hiện chính sách phân phối lại thu nhập.</p>
          </div>

          <div className="space-y-3 mt-4">
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Dẫn chứng (Công cụ Thuế):</p>
              <p className="text-sm text-gray-300">
                Áp dụng biểu Thuế thu nhập cá nhân lũy tiến (người có thu nhập càng cao, thuế suất càng cao) 
                và Thuế tiêu thụ đặc biệt (đánh vào hàng xa xỉ).
              </p>
            </div>
            
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Dẫn chứng (Công cụ Chi Ngân sách):</p>
              <p className="text-sm text-gray-300 mb-2">Dùng tiền thuế thu được để chi cho an sinh xã hội:</p>
              <ul className="text-sm text-gray-300 space-y-1 ml-4 list-disc">
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
          <p className="text-gray-300 leading-relaxed">
            Nhà nước phải là "trọng tài" nghiêm khắc, chống lại những hành vi tìm kiếm lợi ích bất hợp pháp, gây hại cho xã hội.
          </p>

          <div className="space-y-3 mt-4">
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Khuyến khích làm giàu hợp pháp:</p>
              <p className="text-sm text-gray-300">(Như đã nêu ở mục 5.3.2.1).</p>
            </div>
            
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Hoàn thiện pháp luật và thực thi nghiêm minh:</p>
              <p className="text-sm text-gray-300 mb-2">
                <strong className="text-white">Dẫn chứng (Chống tham nhũng, "lợi ích nhóm"):</strong> Cuộc chiến chống tham nhũng quyết liệt 
                trong những năm qua, xử lý hàng loạt đại án (FLC, Tân Hoàng Minh, Vạn Thịnh Phát...) là hành động kiểm soát các LIKT phi pháp, 
                lạm dụng chức quyền, nhằm làm trong sạch thị trường và bảo vệ LIKT của xã hội.
              </p>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold text-white mb-1">Dẫn chứng (Bảo vệ môi trường):</p>
              <p className="text-sm text-gray-300">
                Vụ việc công ty Formosa Hà Tĩnh (2016) xả thải gây ô nhiễm biển. Nhà nước đã can thiệp, xử phạt, 
                buộc công ty phải bồi thường và khắc phục hậu quả, đặt LIKT xã hội (môi trường sống) lên trên LIKT của doanh nghiệp vi phạm.
              </p>
            </div>
            
            <div className="border-l-4 border-[#ffd700] pl-4">
              <p className="font-semibold text-white mb-1">Tuyên truyền, giáo dục:</p>
              <p className="text-sm text-gray-300">
                Nâng cao đạo đức kinh doanh, trách nhiệm xã hội của doanh nghiệp.
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
          <p className="text-gray-300 leading-relaxed">
            Khi mâu thuẫn đã nảy sinh và trở nên gay gắt, Nhà nước phải trực tiếp can thiệp để hòa giải.
          </p>

          <div className="bg-[#1a1a1a] p-4 rounded-lg mt-4">
            <p className="font-semibold mb-2 text-white">Yêu cầu:</p>
            <p className="text-sm text-gray-300 mb-4">
              Các cơ quan chức năng phải thường xuyên quan tâm, phát hiện mâu thuẫn từ sớm và chuẩn bị chu đáo các giải pháp.
            </p>
            <p className="font-semibold mb-2 text-white">Nguyên tắc giải quyết:</p>
            <p className="text-sm text-gray-300">
              Đối thoại, thương lượng, và "đặt lợi ích đất nước lên trên hết".
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-4 rounded-lg mt-4 border border-[#ffd700]/30">
            <h5 className="font-semibold mb-3 text-[#ffd700]">Dẫn chứng thực tiễn:</h5>
            <p className="text-sm text-gray-300 mb-3">
              Khi xảy ra một vụ đình công của công nhân tại một nhà máy (mâu thuẫn giữa người lao động và chủ sử dụng lao động).
            </p>
            
            <div className="space-y-2 mb-3">
              <p className="text-sm font-semibold text-white">Vai trò của Nhà nước:</p>
              <p className="text-sm text-gray-300">
                Sở Lao động - Thương binh & Xã hội, Liên đoàn Lao động địa phương, và chính quyền sẽ ngay lập tức vào cuộc.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Hành động:</p>
              <p className="text-sm text-gray-300">
                Tổ chức một cuộc đối thoại ba bên (Chủ doanh nghiệp - Đại diện Công đoàn/Công nhân - Cơ quan Nhà nước). 
                Cơ quan Nhà nước đóng vai trò trung gian, lắng nghe, hòa giải, và yêu cầu các bên hành động dựa trên cơ sở pháp luật 
                (Bộ luật Lao động) để tìm ra tiếng nói chung (nhân nhượng) và sớm ổn định sản xuất.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section id="nha-nuoc" className="border-t border-[#ffd700]/30 pt-32">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Phần 3: </span>
            <span className="text-[#ffd700]">Vai trò của Nhà nước</span>
          </h2>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* 4 tiểu mục */}
        <div className="space-y-12">
          {roles.map((role, index) => (
            <Card key={index} hover>
              <h3 className="text-2xl font-bold mb-4 text-[#ffd700]">
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
