import Section from './Section';
import Button from './Button';
import YouTubeEmbed from './YouTubeEmbed';

export default function HeroSection() {
  return (
    <Section id="home" className="pt-32">
      <div className="space-y-16 animate-fade-in">
        {/* Tiêu đề lớn */}
        <div className="text-center space-y-4 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-[#ffd700] gradient-text">
              Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam
            </span>
          </h1>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* Phần giới thiệu */}
        <div className="space-y-6 animate-slide-in-up animate-delay-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#ffd700] mb-2">
              Giới thiệu
            </h2>
          </div>
          <div className="prose prose-invert max-w-none text-center md:text-left">
            <p className="text-lg leading-relaxed text-gray-300">
              Trong bối cảnh Việt Nam xây dựng và phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa, 
              việc nghiên cứu <strong className="text-white">lợi ích kinh tế (LIKT)</strong> và các quan hệ LIKT có ý nghĩa lý luận và thực tiễn vô cùng sâu sắc.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Nền kinh tế thị trường, về bản chất, là sự vận hành dựa trên động lực của các lợi ích. 
              Nó giải phóng sức sản xuất nhưng cũng làm nảy sinh các quan hệ lợi ích phức tạp, đa dạng và đan xen, 
              bao gồm cả sự thống nhất và mâu thuẫn.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              Hiểu rõ bản chất của LIKT, các hình thức biểu hiện và cách thức nhà nước can thiệp để hài hòa các quan hệ lợi ích 
              là chìa khóa để vừa phát triển kinh tế hiệu quả, vừa đảm bảo ổn định và công bằng xã hội.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="mt-8 bg-[#2a2a2a] rounded-lg p-8 border border-[#3a3a3a] hover-glow">
            <YouTubeEmbed 
              videoId="nMUxbp981Ws"
              startTime={1742}
              title="Video phân tích 6 nguy cơ lớn đang đe dọa nền kinh tế Việt Nam"
            />
          </div>
        </div>

        {/* Phân tích mâu thuẫn lợi ích kinh tế */}
        <div className="space-y-6 animate-slide-in-up">
          <div className="bg-[#2a2a2a] rounded-lg p-8 border border-[#3a3a3a]">
            <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700] mb-6">
              <p className="text-gray-300 leading-relaxed">
                Video trên tuy mang tính cảnh báo, nhưng lại phản ánh sinh động những mâu thuẫn lợi ích kinh tế trong nền kinh tế Việt Nam hiện nay.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                <strong className="text-white">Sáu "nguy cơ" được nêu trong video thực chất là biểu hiện cụ thể của sự mất cân bằng lợi ích giữa các chủ thể kinh tế</strong> – bao gồm Nhà nước, doanh nghiệp, nhà đầu tư và người dân.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#ffd700] mb-6">
              Phân tích mâu thuẫn lợi ích kinh tế từ 6 nguy cơ
            </h3>

            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'Suy giảm niềm tin của nhà đầu tư và người dân',
                  description: 'Thể hiện lợi ích của nhà đầu tư và người dân chưa được đảm bảo ổn định, khiến dòng vốn và tiêu dùng giảm sút.',
                  analysis: '→ Đây là mâu thuẫn giữa kỳ vọng lợi ích cá nhân và hiệu quả lợi ích chung trong quản lý kinh tế.',
                },
                {
                  num: '2',
                  title: 'Rút vốn ồ ạt và tâm lý thận trọng của doanh nghiệp, vốn ngoại',
                  description: 'Các doanh nghiệp và nhà đầu tư nước ngoài có xu hướng giảm rót vốn do lo ngại rủi ro vĩ mô.',
                  analysis: '→ Phản ánh xung đột lợi ích giữa lợi nhuận ngắn hạn và ổn định dài hạn, cũng như giữa lợi ích quốc gia và lợi ích tư nhân.',
                },
                {
                  num: '3',
                  title: 'Lạm phát ngầm, bào mòn sức mua của người dân',
                  description: 'Giá cả tăng khiến thu nhập thực tế của người lao động giảm, trong khi doanh nghiệp phải đối mặt với chi phí đầu vào cao.',
                  analysis: '→ Đây là mâu thuẫn lợi ích giữa người lao động và doanh nghiệp, đòi hỏi sự điều tiết của Nhà nước qua chính sách tiền tệ, tiền lương và phúc lợi xã hội.',
                },
                {
                  num: '4',
                  title: 'Khủng hoảng niềm tin vào đồng tiền và hệ thống tài chính',
                  description: 'Khi đồng nội tệ mất giá hoặc niềm tin suy giảm, dòng tiền dễ bị rút ra khỏi hệ thống ngân hàng.',
                  analysis: '→ Thể hiện sự đứt gãy trong quan hệ lợi ích giữa người gửi tiền, tổ chức tín dụng và cơ quan điều tiết, làm giảm hiệu quả điều phối nguồn vốn trong xã hội.',
                },
                {
                  num: '5',
                  title: 'Doanh nghiệp nhỏ và vừa (SMEs) kiệt sức',
                  description: 'Nhóm doanh nghiệp này chịu thiệt thòi về vốn, thị phần và khả năng tiếp cận chính sách hỗ trợ.',
                  analysis: '→ Phản ánh sự bất bình đẳng trong phân phối lợi ích, khi nhóm lớn có ưu thế vượt trội, ảnh hưởng đến tính cạnh tranh lành mạnh của nền kinh tế.',
                },
                {
                  num: '6',
                  title: 'Rủi ro tài chính và khủng hoảng niềm tin xã hội',
                  description: 'Khi các nhóm lợi ích vận hành thiếu kiểm soát, nền kinh tế dễ mất cân đối và người dân mất niềm tin vào hệ thống.',
                  analysis: '→ Đây là hệ quả của việc không hài hòa giữa lợi ích cá nhân, tập thể và xã hội, dẫn tới giảm động lực phát triển và niềm tin chung.',
                },
              ].map((risk, idx) => (
                <div key={idx} className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#ffd700]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#ffd700] text-[#1a1a1a] rounded-full flex items-center justify-center font-bold text-lg">
                      {risk.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3">{risk.title}</h4>
                      <p className="text-gray-300 mb-3 leading-relaxed">{risk.description}</p>
                      <p className="text-[#ffd700] font-medium leading-relaxed">{risk.analysis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bài học rút ra */}
            <div className="mt-8 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-lg p-6 border border-[#ffd700]/30">
              <h3 className="text-xl font-bold text-[#ffd700] mb-4">
                👉 Bài học rút ra
              </h3>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Những "nguy cơ" kinh tế trên <strong className="text-white">không chỉ là vấn đề tài chính – tiền tệ</strong>, mà bản chất là <strong className="text-white">hệ quả của sự mất cân bằng lợi ích kinh tế</strong>.
                </p>
                <p>
                  Để bảo đảm phát triển bền vững, <strong className="text-white">Nhà nước cần đóng vai trò điều tiết hài hòa lợi ích giữa cá nhân – doanh nghiệp – xã hội</strong>, thông qua cơ chế phân phối công bằng, chính sách ổn định và minh bạch.
                </p>
                <p className="text-[#ffd700] font-semibold">
                  Chỉ khi lợi ích được cân bằng, nền kinh tế mới duy trì được niềm tin, động lực và tính ổn định lâu dài.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phần Bài học */}
        <div className="mt-16 animate-slide-in-up animate-delay-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#ffd700] mb-2">
              Bài học
            </h2>
            <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
          </div>
          
          {/* Các nút chuyển */}
          <div className="flex flex-wrap gap-6 justify-center">
            <Button href="/loi-ich-kinh-te" variant="secondary" className="hover-glow scale-on-hover">
              Tìm hiểu Lợi ích kinh tế
            </Button>
            <Button href="/quan-he-likt" variant="secondary" className="hover-glow scale-on-hover">
              Quan hệ lợi ích kinh tế
            </Button>
            <Button href="/vai-tro-nha-nuoc" variant="secondary" className="hover-glow scale-on-hover">
              Vai trò của Nhà nước
            </Button>
            <Button href="/tong-ket" variant="secondary" className="hover-glow scale-on-hover">
              Tổng kết & Tương tác
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
