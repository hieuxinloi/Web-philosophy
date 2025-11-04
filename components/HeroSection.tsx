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
            Chương 5 – Mục 5.3:
            <br />
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

        {/* Nội dung phân tích */}
        <div className="space-y-6 animate-slide-in-up">
          <div className="bg-[#2a2a2a] rounded-lg p-8 border border-[#3a3a3a]">
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              <strong className="text-white">Video phân tích 6 nguy cơ lớn đang đe dọa nền kinh tế Việt Nam</strong>, 
              rút ra bài học từ khủng hoảng tài chính châu Á 1997.
            </p>
            <div className="bg-[#1a1a1a] p-4 rounded-lg border-l-4 border-[#ffd700] mb-6">
              <p className="text-gray-300 italic">
                <strong className="text-white">Điểm chung:</strong> Khủng hoảng không bùng nổ ồn ào, 
                mà diễn ra âm thầm qua mất niềm tin, rút vốn, lạm phát và co cụm đầu tư.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-[#ffd700] mb-6">
              Sáu nguy cơ chính của nền kinh tế Việt Nam
            </h3>

            <div className="space-y-6">
              {[
                {
                  num: '1',
                  title: 'Suy giảm niềm tin của nhà đầu tư và người dân',
                  points: [
                    'Thị trường chứng khoán giảm mạnh, hàng trăm nghìn doanh nghiệp rút lui.',
                    'Giới tinh hoa tài chính âm thầm chuyển tài sản ra nước ngoài.',
                    'Dấu hiệu khủng hoảng bắt đầu từ niềm tin chứ không phải sụp đổ ngân hàng.',
                  ]
                },
                {
                  num: '2',
                  title: 'Rút vốn âm thầm của doanh nghiệp và vốn ngoại',
                  points: [
                    'Các tập đoàn đa quốc gia cắt giảm đầu tư, chuyển hoạt động sang nước khác mà công chúng không hề hay biết.',
                    'Hậu quả xuất hiện sau – tín dụng thắt chặt, việc làm giảm, thị trường trầm lắng.',
                  ]
                },
                {
                  num: '3',
                  title: 'Lạm phát ngầm, bào mòn sức mua',
                  points: [
                    'CPI chỉ tăng 3.1% nhưng giá cả tăng nhanh hơn thu nhập.',
                    'Người dân và doanh nghiệp nhỏ dần thích nghi mà không nhận ra giá trị đồng tiền giảm mạnh.',
                    'Đây là "lạm phát thầm lặng" – nguy hiểm vì khó nhận biết nhưng ăn mòn nền kinh tế.',
                  ]
                },
                {
                  num: '4',
                  title: 'Khủng hoảng niềm tin vào đồng tiền',
                  points: [
                    'Người dân rút tiền tiết kiệm, mua vàng hoặc USD.',
                    'Doanh nghiệp không vay vốn, ngân hàng thiếu thanh khoản.',
                    'Các nhà giàu chuyển sang tài sản an toàn → bẫy thanh khoản hình thành.',
                  ]
                },
                {
                  num: '5',
                  title: 'Doanh nghiệp nhỏ và vừa (SMEs) kiệt sức',
                  points: [
                    'Chiếm 97% tổng số doanh nghiệp, là xương sống của nền kinh tế.',
                    'Bị bóp nghẹt bởi chi phí đầu vào cao, tín dụng khó tiếp cận, đơn hàng giảm.',
                    'Nếu SMEs "chết hàng loạt", chuỗi cung ứng, việc làm và tiêu dùng đều sụp theo.',
                  ]
                },
                {
                  num: '6',
                  title: 'Rủi ro từ chính sách và khủng hoảng niềm tin xã hội',
                  points: [
                    'Các chính sách thay đổi đột ngột khiến nhà đầu tư mất niềm tin, trì hoãn kế hoạch.',
                    'Người dân mất niềm tin vào phục hồi, "ôm tiền, mua vàng" thay vì đầu tư.',
                    'Niềm tin kinh tế và xã hội bị "đóng băng" – nguy hiểm hơn cả suy giảm GDP.',
                  ]
                },
              ].map((risk, idx) => (
                <div key={idx} className="bg-[#1a1a1a] rounded-lg p-6 border border-[#3a3a3a] hover:border-[#ffd700]/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#ffd700] text-[#1a1a1a] rounded-full flex items-center justify-center font-bold text-lg">
                      {risk.num}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3">{risk.title}</h4>
                      <ul className="space-y-2">
                        {risk.points.map((point, pIdx) => (
                          <li key={pIdx} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#ffd700] mt-1">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Thông điệp & Bài học */}
            <div className="mt-8 bg-gradient-to-br from-[#ffd700]/20 to-transparent rounded-lg p-6 border border-[#ffd700]/30">
              <h3 className="text-xl font-bold text-[#ffd700] mb-4">
                Thông điệp & Bài học chính
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong className="text-white">Khủng hoảng kinh tế không bắt đầu bằng tiếng nổ lớn, mà bằng sự im lặng.</strong>
                </p>
                <p>
                  Ai hiểu sớm – chuẩn bị sớm (về dòng tiền, đầu tư, kiến thức) sẽ sống sót và tận dụng cơ hội.
                </p>
                <p className="text-[#ffd700] font-semibold">
                  Nhận thức và kỷ luật tài chính là tài sản quý hơn vàng hay bất động sản trong thời khủng hoảng.
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
