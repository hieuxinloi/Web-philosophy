import Section from './Section';
import Button from './Button';
import YouTubeEmbed from './YouTubeEmbed';

export default function HeroSection() {
  return (
    <Section id="home" className="pt-32 bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="space-y-16 animate-fade-in">
        {/* Tiêu đề lớn */}
        <div className="text-center space-y-4 animate-slide-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent">
              Lợi ích kinh tế và Quan hệ lợi ích kinh tế ở Việt Nam
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Phần giới thiệu */}
        <div className="space-y-6 animate-slide-in-up animate-delay-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-2">
              Giới thiệu
            </h2>
          </div>
          <div className="prose max-w-none text-center md:text-left">
            <p className="text-lg leading-relaxed text-slate-700">
              Trong bối cảnh Việt Nam xây dựng và phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa, 
              việc nghiên cứu <strong className="text-blue-900">lợi ích kinh tế (LIKT)</strong> và <strong className="text-blue-900">các quan hệ LIKT</strong> có ý nghĩa lý luận và thực tiễn vô cùng sâu sắc.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              Nền kinh tế thị trường, về bản chất, là sự vận hành dựa trên động lực của các lợi ích. 
              Nó giải phóng sức sản xuất nhưng cũng làm nảy sinh các quan hệ lợi ích phức tạp, đa dạng và đan xen, 
              bao gồm cả sự thống nhất và mâu thuẫn.
            </p>
            <p className="text-lg leading-relaxed text-slate-700 mt-4">
              Hiểu rõ bản chất của LIKT, các hình thức biểu hiện và cách thức nhà nước can thiệp để hài hòa các quan hệ lợi ích 
              là chìa khóa để vừa phát triển kinh tế hiệu quả, vừa đảm bảo ổn định và công bằng xã hội.
            </p>
          </div>

          {/* YouTube Video */}
          <div className="mt-8 bg-white rounded-xl p-8 border-2 border-blue-300 hover:border-yellow-400 shadow-lg hover-glow transition-all duration-300">
            <YouTubeEmbed 
              videoId="nMUxbp981Ws"
              startTime={1742}
              title="Video phân tích 6 nguy cơ lớn đang đe dọa nền kinh tế Việt Nam"
            />
          </div>
        </div>

        {/* Phân tích mâu thuẫn lợi ích kinh tế */}
        <div className="space-y-6 animate-slide-in-up">
          <div className="bg-white rounded-xl p-8 border-2 border-blue-300 hover:border-yellow-400 shadow-lg transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-5 rounded-lg border-l-4 border-blue-700 mb-6 shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Video trên tuy mang tính cảnh báo, nhưng lại phản ánh sinh động những mâu thuẫn lợi ích kinh tế trong nền kinh tế Việt Nam hiện nay.
              </p>
              <p className="text-slate-700 leading-relaxed mt-3">
                <strong className="text-blue-900">Sáu "nguy cơ" được nêu trong video thực chất là biểu hiện cụ thể của sự mất cân bằng lợi ích giữa các chủ thể kinh tế</strong> – bao gồm Nhà nước, doanh nghiệp, nhà đầu tư và người dân.
              </p>
            </div>

            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-6">
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
                <div key={idx} className="bg-gradient-to-r from-blue-50 to-white rounded-lg p-6 border-2 border-blue-200 hover:border-yellow-400 transition-all duration-300 shadow-md hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                      {risk.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">{risk.title}</h4>
                      <p className="text-slate-700 mb-3 leading-relaxed">{risk.description}</p>
                      <p className="text-blue-800 font-medium leading-relaxed">{risk.analysis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bài học rút ra */}
            <div className="mt-8 bg-gradient-to-br from-blue-100 via-blue-50 to-white rounded-xl p-6 border-2 border-blue-400 shadow-lg">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-4">
                Bài học rút ra
              </h3>
              <div className="space-y-3 text-slate-700 leading-relaxed">
                <p>
                  Những "nguy cơ" kinh tế trên <strong className="text-blue-900">không chỉ là vấn đề tài chính – tiền tệ</strong>, mà bản chất là <strong className="text-blue-900">hệ quả của sự mất cân bằng lợi ích kinh tế</strong>.
                </p>
                <p>
                  Để bảo đảm phát triển bền vững, <strong className="text-blue-900">Nhà nước cần đóng vai trò điều tiết hài hòa lợi ích giữa cá nhân – doanh nghiệp – xã hội</strong>, thông qua cơ chế phân phối công bằng, chính sách ổn định và minh bạch.
                </p>
                <p className="text-blue-800 font-semibold">
                  Chỉ khi lợi ích được cân bằng, nền kinh tế mới duy trì được niềm tin, động lực và tính ổn định lâu dài.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phần Bài học */}
        <div className="mt-16 animate-slide-in-up animate-delay-400">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 bg-clip-text text-transparent mb-2">
              Bài học
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
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
            <Button href="/van-de-dua-ra" variant="secondary" className="hover-glow scale-on-hover">
              Vấn đề được đặt ra
            </Button>
            <Button href="/tong-ket" variant="secondary" className="hover-glow scale-on-hover">
              Công nghệ & Minh bạch học thuật
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
