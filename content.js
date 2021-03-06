const list_question = [
  "1. Tell me a little bit about yourself?",
  "2. Can you tell me how you heard about this position?",
  "3. What attracted you to our company?",
  "4. What is your greatest strength?",
  "5. What is your greatest weakness?",
  "6. Tell me about a time when you had a stressful situation?",
  "7. Where do you see yourself in 5 years?",
  "8. What is your salary expectation?",
  "9. Do you have any questions for me, about the company or the position?",
];

const question_1 = [
  {
    en:
      "sure, i studied at cao thang technical college and i graduated in 2019 with a degree in automobile engineering.",
    vi:
      "chắc chắn rồi, tôi học trường cao đẳng kỹ thuật cao thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.",
    embed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987427831&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nvkhuongenglish" title="Khương Nguyễn" target="_blank" style="color: #cccccc; text-decoration: none;">Khương Nguyễn</a> · <a href="https://soundcloud.com/nvkhuongenglish/0-0-6x-22-00-30-184458" title="0 0.6x 22:00:30.184458" target="_blank" style="color: #cccccc; text-decoration: none;">0 0.6x 22:00:30.184458</a></div>`,
  },
  {
    en:
      'at school, i took part in "mini racing car" competition and some other volunteer activities such as green summer campaign, and blood donation.',
    vi:
      'ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như chiến dịch mùa hè xanh, hiến máu nhân đạo.',
    embed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987427822&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nvkhuongenglish" title="Khương Nguyễn" target="_blank" style="color: #cccccc; text-decoration: none;">Khương Nguyễn</a> · <a href="https://soundcloud.com/nvkhuongenglish/1-0-6x-22-00-30-184458" title="1 0.6x 22:00:30.184458" target="_blank" style="color: #cccccc; text-decoration: none;">1 0.6x 22:00:30.184458</a></div>`,
  },
  {
    en:
      "in the five final year, i have had an internship at toyota factory for 6 months helps me get more experiences in repairing automobiles.",
    vi:
      "năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.",
    embed: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/987427813&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nvkhuongenglish" title="Khương Nguyễn" target="_blank" style="color: #cccccc; text-decoration: none;">Khương Nguyễn</a> · <a href="https://soundcloud.com/nvkhuongenglish/2-0-6x-22-00-30-184458" title="2 0.6x 22:00:30.184458" target="_blank" style="color: #cccccc; text-decoration: none;">2 0.6x 22:00:30.184458</a></div>`,
  },
];

const question_2 = [
  {
    en:
      "a friend of mine saw the position listed on vietnamwork website and he forwarded it to me.",
    vi:
      "một người bạn của tôi đã nhìn thấy vị trí được ghi trên trang web vietnamwork và anh ấy đã chuyển tiếp cho tôi.",
  },
  {
    en:
      "so i spent time on your website learning about this position and your company.",
    vi:
      "vì vậy, tôi đã dành thời gian trên trang web của bạn để tìm hiểu về vị trí này và công ty của bạn.",
  },
];

const question_3 = [
  {
    en:
      "i am so impressed by your contributions to society every year and i want to become a volunteer in those meaningful activities.",
    vi:
      "tôi rất ấn tượng về những đóng góp của bạn cho xã hội hàng năm và tôi muốn trở thành tình nguyện viên trong những hoạt động ý nghĩa đó.",
  },
  {
    en: "i also like the ways you support your employees.",
    vi: "tôi cũng thích cách bạn hỗ trợ nhân viên của mình.",
  },
  {
    en:
      "i know that you pay for employees to develop the new techniques and skills.",
    vi:
      "tôi biết rằng bạn trả tiền để nhân viên phát triển các kỹ thuật và kỹ năng mới.",
  },
  {
    en: "i think that really helps to build employee satisfaction and loyalty.",
    vi:
      "tôi nghĩ rằng điều đó thực sự giúp xây dựng sự hài lòng và lòng trung thành của nhân viên.",
  },
];

const question_4 = [
  { en: "i am good at teamwork.", vi: "tôi giỏi làm việc nhóm." },
  {
    en: "during my school time, i had many projects woking in group of 3 or 4.",
    vi:
      "trong thời gian đi học, tôi đã có nhiều dự án thực hiện theo nhóm 3 hoặc 4 người.",
  },
  {
    en:
      "we gave feedbacks to each other and helped other members to complete the projects more efficiently.",
    vi:
      "chúng tôi đã phản hồi cho nhau và giúp các thành viên khác hoàn thành dự án hiệu quả hơn.",
  },
  {
    en: "thus, we had good results.",
    vi: "vì vậy, chúng tôi đã có kết quả tốt.",
  },
  {
    en: "besides, i am also a punctual person.",
    vi: "bên cạnh đó, tôi cũng là một người rất đúng giờ.",
  },
  {
    en:
      "i always arrived early and completed my work on time in my internship.",
    vi: "tôi luôn đến sớm và hoàn thành công việc đúng hạn trong kỳ thực tập.",
  },
];

const question_5 = [
  {
    en: "to be honest, i am not good at public speaking.",
    vi: "thành thật mà nói, tôi không giỏi nói trước đám đông.",
  },
  {
    en: "i always feel nervous when making presentation in class.",
    vi: "tôi luôn cảm thấy lo lắng khi thuyết trình trên lớp.",
  },
  {
    en:
      "in other to reduce the speaking anxiety, i am trying to present my idea in larger group.",
    vi:
      "ngoài ra, để giảm bớt lo lắng khi nói, tôi đang cố gắng trình bày ý tưởng của mình trong một nhóm lớn hơn.",
  },
  {
    en: "moreover, i don't speak english very well.",
    vi: "hơn nữa, tôi nói tiếng anh không tốt lắm.",
  },
  {
    en:
      "so i am talking part in an english communication course to improve my speaking skill.",
    vi:
      "vì vậy, tôi đang tham gia một khóa học giao tiếp tiếng anh để cải thiện kỹ năng nói của mình.",
  },
];

const question_6 = [
  {
    en: "sure, when i was a student at cao thang college.",
    vi: "chắc chắn rồi, khi tôi còn là sinh viên trường cao thắng.",
  },
  {
    en: "i had 4 projects in the same week.",
    vi: "tôi đã có 4 dự án trong cùng một tuần.",
  },
  { en: "in order to meet the deadline.", vi: "để đáp ứng thời hạn." },
  {
    en: "i created a schedule in details to manage my time.",
    vi: "tôi đã tạo một lịch trình chi tiết để quản lý thời gian của mình.",
  },
  {
    en: "i broke the projects up into smaller steps.",
    vi: "tôi chia nhỏ các dự án thành các bước nhỏ hơn.",
  },
  { en: "as the result.", vi: "kết quả là." },
  {
    en:
      "i finished all the projects and my teacher was happy with the work quality.",
    vi:
      "tôi đã hoàn thành tất cả các dự án và giáo viên của tôi rất vui với chất lượng công việc.",
  },
];

const question_7 = [
  {
    en:
      "over the next five years, my goals involve growing with a company where i can continue to learn, take on more responsibilities, and contribute as much value as i can.",
    vi:
      "trong năm năm tới, mục tiêu của tôi liên quan đến việc phát triển với một công ty nơi tôi có thể tiếp tục học hỏi, đảm nhận nhiều trách nhiệm hơn và đóng góp nhiều giá trị nhất có thể.",
  },
  {
    en:
      "i also want to speak english more fluently so that i can exchange the experience with the foreign mechanics.",
    vi:
      "tôi cũng muốn nói tiếng anh trôi chảy hơn để có thể trao đổi kinh nghiệm với các thợ máy nước ngoài.",
  },
];

const question_8 = [
  {
    en:
      "i think your company has already had the suitable salary policy for the worker.",
    vi:
      "tôi nghĩ quý công ty đã có chính sách lương phù hợp cho người lao động.",
  },
  {
    en: "so i will follows its range.",
    vi: "vì vậy, tôi sẽ làm theo phạm vi của nó.",
  },
];

const question_9 = [
  {
    en: "yes, can you tell me what is the biggest challenge in this position.",
    vi:
      "vâng, bạn có thể cho tôi biết thách thức lớn nhất ở vị trí này là gì không?",
  },
  {
    en: "1 do you have to work in shifts.",
    vi: "1 bạn có phải làm việc theo ca.",
  },
  {
    en: "2 do i have to work overtime.",
    vi: "2 tôi có phải làm thêm giờ không.",
  },
  {
    en: "3 do i often make business trips.",
    vi: "3 tôi có thường xuyên đi công tác không.",
  },
  {
    en: "4 can you tell me about the team that i would be working with.",
    vi: "4 bạn có thể cho tôi biết về đội mà tôi sẽ làm việc cùng.",
  },
];

const qsNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const qsRep = {
  question_1: question_1,
  question_2: question_2,
  question_3: question_3,
  question_4: question_4,
  question_5: question_5,
  question_6: question_6,
  question_7: question_7,
  question_8: question_8,
  question_9: question_9,
};

let storeRandom = [];

// --- version 1
// B1. Lấy câu hỏi hiển thị. Nhập vào câu trả lời
// B2. Lấy đáp án so sánh với đáp án câu hỏi nhập vào.
// B3. Thực hiện prompt lại nếu nhập sai đáp án.
// B4. Upload lên facebook.

// --- version 2
// B1. Tạo modal custom. OK
// B2. Lấy giá trị form. OK
// B3. Phát âm thanh.  OK
// B4. In câu hỏi vào đầu header. OK.
// B5. In câu trả lời vào footer. OK

function randomQS() {
  return Math.floor(Math.random() * list_question.length); //[0,8]
}

// B1. Kiểm tra trong store đã có số đó chưa.
// B2. Nếu chưa có lưu lại rồi dừng vòng lặp và lấy đi xử lý.
// B3. Nếu đã có thì random 1 con số khác-> nếu trùng thì thực hiện lại.
// B4. Nếu nó đã đủ tất cả các số thì xóa tất cả các số lưu và thực hiện lại từ đầu

function getQuestion() {
  let randNumber = randomQS();
  for (let i = 0; i < list_question.length; i++) {
    if (storeRandom.length === list_question.length) {
      storeRandom = [];
      break;
    }
    if (storeRandom.includes(randNumber)) {
      randNumber = randomQS();
    } else {
      storeRandom.push(randNumber);
      break;
    }
  }
  console.log("%ccontent.js line:269 object", "color: #007acc;", storeRandom);

  const qs = list_question[randNumber];

  return { content: qs, number_rand: randNumber };
}

function textToSpeak() {
  const text = document.getElementById("question").innerText;
  console.log(text);
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.6;
  window.speechSynthesis.speak(msg);
}

function handleModal() {
  // Get the modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function getAnswer() {
  const number_rand = document.getElementById("number_rand").value;
  const answer = qsRep[`question_${Number(number_rand) + 1}`];
  console.log(answer);
  return answer;
}

function runSpeak() {
  const myText = document.getElementById("answer").innerText;
  const msg = new SpeechSynthesisUtterance(myText);
  window.speechSynthesis.speak(msg);
}

function restartQS() {
  const qs_current = document.getElementById("question").innerText;
  document.getElementById("question_old").innerText = qs_current;
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function checkReply() {
  const rep = document.getElementById("input_rep").value.toLowerCase();
  if (rep) {
    const answer = getAnswer()[0].en.toLowerCase();

    if (rep === answer) {
      console.log("Kết thúc", "Success");
      closeModal();
    } else {
      restartQS();
      document.getElementById("reply").innerText = "Reply: " + rep;
      document.getElementById("answer").innerText = "Answer: " + answer;
      document.getElementById("id_footer").style.display = "block";

      console.log("Bạn nhập:", rep);
      console.log("Đáp án:", answer);
      runSpeak();
      initQuestion();
    }
  } else {
    initQuestion();
  }
}

function handleForm(event) {
  event.preventDefault();
  checkReply();
}

function eventClick() {
  var form = document.getElementById("myForm");
  form.addEventListener("submit", handleForm);

  document
    .getElementById("run_speek_qs")
    .addEventListener("click", textToSpeak);
  const run_speak = document.getElementById("run_speak");
  run_speak.addEventListener("click", checkReply);
}

function initQuestion() {
  qs = getQuestion();
  document.getElementById("question").innerText = qs["content"];
  document.getElementById("number_rand").value = qs["number_rand"];
}

function createElementPage() {
  const html_page = `<h2>Extension</h2>
	<!-- The Modal -->
	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content" style="margin:auto;">
			<div class="modal-header">
				<div style="display: flex;flex-direction: row;">
					<h2 id="question" style="color:white;" class="id_h2"></h2>
					<input id="number_rand" value="" type="hidden"></input>
					<button id="run_speek_qs"
						style="background-color:white;border:none;opacity: 0.6;border-radius:90px;margin-left:10px;">~(Speek)~</button>

				</div>

			</div>
			<div class="modal-body">
				<form action="#" id="myForm">
					<div class="fomrgroup">
						<input type="text" name="input_rep" id="input_rep" value="" style="width:100%;" class="input_form">
					</div>

					<div class="fomrgroup" style="margin-top:10px;">
						<button id="run_speak" type="button" class="input_submit">Kiểm tra</button>
					</div>
				</form>
			</div>
			<div class="modal-footer" style="display:none" id="id_footer">
				<div style="width:100%;display: flex;margin-top: 20px;">
					<h4 id="question_old" style="text-align: left;color:rgba(255, 255, 255, 0.63)" class="id_h4"></h4>
				</div>
				<div style="width:100%;display: flex;">
					<h6 id="reply" style="text-align: left;color:rgba(255, 255, 255, 0.46)" class="id_h6"></h6>

				</div>
				<div style="width:100%;display: flex;">
					<h6 id="answer" style="text-align: left;color:rgba(255, 255, 255, 0.46);" class="id_h6"></h6>
				</div>
			</div>
		</div>

	</div>`;

  const node = document.createElement("div");
  node.innerHTML += html_page;
  document.body.appendChild(node);
}

window.onload = () => {
  console.log("page is fully loaded");
  createElementPage();
  handleModal();
  eventClick();
  initQuestion();
};
