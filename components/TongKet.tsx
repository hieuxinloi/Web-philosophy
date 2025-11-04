'use client';

import { useState } from 'react';
import Section from './Section';
import Card from './Card';
import Button from './Button';

export default function TongKet() {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);

  const quizQuestions = [
    {
      question: 'Lợi ích kinh tế là gì?',
      options: [
        'Là động cơ thúc đẩy các hoạt động sản xuất, kinh doanh',
        'Là những lợi ích được thể hiện dưới dạng giá trị vật chất',
        'Cả hai đáp án trên',
        'Là quan hệ giữa các chủ thể trong nền kinh tế',
      ],
      correct: 2,
    },
    {
      question: 'Vai trò chính của Nhà nước trong quan hệ lợi ích kinh tế là gì?',
      options: [
        'Chỉ bảo vệ lợi ích của doanh nghiệp',
        'Bảo vệ, điều hòa, kiểm soát và giải quyết mâu thuẫn',
        'Chỉ điều chỉnh giá cả thị trường',
        'Không can thiệp vào quan hệ lợi ích',
      ],
      correct: 1,
    },
    {
      question: 'Mâu thuẫn lợi ích kinh tế luôn là tiêu cực?',
      options: [
        'Đúng, luôn là tiêu cực',
        'Sai, có thể trở thành động lực phát triển khi được giải quyết đúng cách',
        'Không có mâu thuẫn trong nền kinh tế thị trường',
        'Chỉ xảy ra giữa doanh nghiệp và người lao động',
      ],
      correct: 1,
    },
  ];

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionIndex]: answerIndex });
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correct) {
        score++;
      }
    });
    return score;
  };

  const tongKetData = [
    {
      thanhPhan: 'Người lao động',
      vaiTro: 'Động lực lao động, nâng cao kỹ năng',
      quanHe: 'Hợp tác và mâu thuẫn với NSDLĐ',
      nhaNuoc: 'Bảo vệ quyền lợi, đảm bảo công bằng',
    },
    {
      thanhPhan: 'Doanh nghiệp',
      vaiTro: 'Tối đa hóa lợi nhuận, phát triển kinh tế',
      quanHe: 'Cạnh tranh và hợp tác với nhau',
      nhaNuoc: 'Hỗ trợ, điều tiết, kiểm soát',
    },
    {
      thanhPhan: 'Nhà nước',
      vaiTro: 'Quản lý, điều tiết, đảm bảo công bằng',
      quanHe: 'Trung gian, điều phối các quan hệ',
      nhaNuoc: 'Tự điều tiết thông qua chính sách',
    },
    {
      thanhPhan: 'Xã hội',
      vaiTro: 'Tạo môi trường, hấp thụ tác động',
      quanHe: 'Nhận lợi ích từ các quan hệ kinh tế',
      nhaNuoc: 'Được bảo vệ và phục vụ',
    },
  ];

  return (
    <Section id="tong-ket" className="border-t border-[#ffd700]/30 pt-32">
      <div className="space-y-16">
        {/* Tiêu đề phần */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Tổng kết </span>
            <span className="text-[#ffd700]">& Tương tác</span>
          </h2>
          <div className="w-32 h-1 bg-[#ffd700] mx-auto"></div>
        </div>

        {/* Bảng tổng hợp */}
        <Card>
          <h3 className="text-2xl font-bold mb-6 text-[#ffd700] text-center">
            Bảng tổng hợp các thành phần và vai trò
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#ffd700]">
                  <th className="p-4 font-bold text-[#ffd700]">Thành phần</th>
                  <th className="p-4 font-bold text-[#ffd700]">Vai trò lợi ích</th>
                  <th className="p-4 font-bold text-[#ffd700]">Quan hệ cơ bản</th>
                  <th className="p-4 font-bold text-[#ffd700]">Nhà nước điều tiết</th>
                </tr>
              </thead>
              <tbody>
                {tongKetData.map((row, idx) => (
                  <tr key={idx} className="border-b border-[#3a3a3a] hover:bg-[#2a2a2a] transition-colors">
                    <td className="p-4 font-semibold">{row.thanhPhan}</td>
                    <td className="p-4 text-gray-300">{row.vaiTro}</td>
                    <td className="p-4 text-gray-300">{row.quanHe}</td>
                    <td className="p-4 text-gray-300">{row.nhaNuoc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quiz */}
        <Card>
          <h3 className="text-2xl font-bold mb-6 text-[#ffd700] text-center">
            Trắc nghiệm nhanh – Bạn hiểu đúng về lợi ích kinh tế chưa?
          </h3>
          
          <div className="space-y-8">
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Câu {qIndex + 1}: {q.question}
                </h4>
                <div className="space-y-2 pl-4">
                  {q.options.map((option, oIndex) => (
                    <label
                      key={oIndex}
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedAnswers[qIndex] === oIndex
                          ? 'bg-[#ffd700]/20 border-2 border-[#ffd700]'
                          : 'bg-[#1a1a1a] border-2 border-transparent hover:border-[#ffd700]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        value={oIndex}
                        checked={selectedAnswers[qIndex] === oIndex}
                        onChange={() => handleAnswerSelect(qIndex, oIndex)}
                        className="w-4 h-4 text-[#ffd700]"
                      />
                      <span className="text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex justify-center gap-4 pt-6">
              <button
                onClick={() => {
                  setShowResults(true);
                }}
                className="px-8 py-3 bg-[#ffd700] text-[#1a1a1a] font-semibold rounded-lg hover:bg-[#e6c200] transition-colors"
              >
                Xem kết quả
              </button>
              <button
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
                className="px-8 py-3 border-2 border-[#ffd700] text-[#ffd700] font-semibold rounded-lg hover:bg-[#ffd700]/10 transition-colors"
              >
                Làm lại
              </button>
            </div>

            {showResults && (
              <div className="mt-6 p-6 bg-[#1a1a1a] rounded-lg border-2 border-[#ffd700]">
                <h4 className="text-xl font-bold mb-4 text-center text-[#ffd700]">
                  Kết quả của bạn
                </h4>
                <div className="text-center space-y-2">
                  <p className="text-3xl font-bold text-white">
                    {calculateScore()} / {quizQuestions.length}
                  </p>
                  <p className="text-gray-300">
                    {calculateScore() === quizQuestions.length
                      ? 'Xuất sắc! Bạn đã hiểu rất rõ về lợi ích kinh tế!'
                      : calculateScore() >= quizQuestions.length / 2
                      ? 'Tốt! Bạn đã nắm được phần lớn kiến thức!'
                      : 'Hãy đọc lại tài liệu để hiểu rõ hơn!'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        {/* Tài liệu tham khảo và Tương tác */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card hover>
            <h3 className="text-xl font-bold mb-4 text-[#ffd700]">
              Tài liệu tham khảo
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tải về slide giáo trình, PDF bài giảng và các tài liệu liên quan đến chủ đề này.
            </p>
            <div className="space-y-2">
              <Button href="#" variant="secondary">
                Tải PDF Giáo trình
              </Button>
              <Button href="#" variant="secondary">
                Tải Slide PowerPoint
              </Button>
            </div>
          </Card>

          <Card hover>
            <h3 className="text-xl font-bold mb-4 text-[#ffd700]">
              Thảo luận & Ôn tập
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Tham gia thảo luận nhóm, đặt câu hỏi và ôn tập kiến thức cùng các bạn sinh viên khác.
            </p>
            <div className="space-y-2">
              <Button href="#" variant="secondary">
                Câu hỏi ôn tập
              </Button>
              <Button href="#" variant="secondary">
                Thảo luận nhóm
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
