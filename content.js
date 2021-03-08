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
    id: 1,
    en:
      "sure, i studied at cao thang technical college and i graduated in 2019 with a degree in automobile engineering.",
    vi:
      "chắc chắn rồi, tôi học trường cao đẳng kỹ thuật cao thắng và tôi tốt nghiệp năm 2019 với bằng kỹ sư ô tô.",
  },
  {
    id: 2,
    en:
      'at school, i took part in "mini racing car" competition and some other volunteer activities such as green summer campaign, and blood donation.',
    vi:
      'ở trường, em tham gia cuộc thi "đua xe mini" và một số hoạt động tình nguyện khác như chiến dịch mùa hè xanh, hiến máu nhân đạo.',
  },
  {
    id: 3,
    en:
      "in the five final year, i have had an internship at toyota factory for 6 months helps me get more experiences in repairing automobiles.",
    vi:
      "năm năm cuối, tôi đã có 6 tháng thực tập tại nhà máy toyota giúp tôi có thêm kinh nghiệm sửa chữa ô tô.",
  },
];

const question_2 = [
  {
    id: 1,
    en:
      "a friend of mine saw the position listed on vietnamwork website and he forwarded it to me.",
    vi:
      "một người bạn của tôi đã nhìn thấy vị trí được ghi trên trang web vietnamwork và anh ấy đã chuyển tiếp cho tôi.",
  },
  {
    id: 2,
    en:
      "so i spent time on your website learning about this position and your company.",
    vi:
      "vì vậy, tôi đã dành thời gian trên trang web của bạn để tìm hiểu về vị trí này và công ty của bạn.",
  },
];

const question_3 = [
  {
    id: 1,
    en:
      "i am so impressed by your contributions to society every year and i want to become a volunteer in those meaningful activities.",
    vi:
      "tôi rất ấn tượng về những đóng góp của bạn cho xã hội hàng năm và tôi muốn trở thành tình nguyện viên trong những hoạt động ý nghĩa đó.",
  },
  {
    id: 2,
    en: "i also like the ways you support your employees.",
    vi: "tôi cũng thích cách bạn hỗ trợ nhân viên của mình.",
  },
  {
    id: 3,
    en:
      "i know that you pay for employees to develop the new techniques and skills.",
    vi:
      "tôi biết rằng bạn trả tiền để nhân viên phát triển các kỹ thuật và kỹ năng mới.",
  },
  {
    id: 4,
    en: "i think that really helps to build employee satisfaction and loyalty.",
    vi:
      "tôi nghĩ rằng điều đó thực sự giúp xây dựng sự hài lòng và lòng trung thành của nhân viên.",
  },
];

const question_4 = [
  { id: 1, en: "i am good at teamwork.", vi: "tôi giỏi làm việc nhóm." },
  {
    id: 2,
    en: "during my school time, i had many projects woking in group of 3 or 4.",
    vi:
      "trong thời gian đi học, tôi đã có nhiều dự án thực hiện theo nhóm 3 hoặc 4 người.",
  },
  {
    id: 3,
    en:
      "we gave feedbacks to each other and helped other members to complete the projects more efficiently.",
    vi:
      "chúng tôi đã phản hồi cho nhau và giúp các thành viên khác hoàn thành dự án hiệu quả hơn.",
  },
  {
    id: 4,
    en: "thus, we had good results.",
    vi: "vì vậy, chúng tôi đã có kết quả tốt.",
  },
  {
    id: 5,
    en: "besides, i am also a punctual person.",
    vi: "bên cạnh đó, tôi cũng là một người rất đúng giờ.",
  },
  {
    id: 6,
    en:
      "i always arrived early and completed my work on time in my internship.",
    vi: "tôi luôn đến sớm và hoàn thành công việc đúng hạn trong kỳ thực tập.",
  },
];

const question_5 = [
  {
    id: 1,
    en: "to be honest, i am not good at public speaking.",
    vi: "thành thật mà nói, tôi không giỏi nói trước đám đông.",
  },
  {
    id: 2,
    en: "i always feel nervous when making presentation in class.",
    vi: "tôi luôn cảm thấy lo lắng khi thuyết trình trên lớp.",
  },
  {
    id: 3,
    en:
      "in other to reduce the speaking anxiety, i am trying to present my idea in larger group.",
    vi:
      "ngoài ra, để giảm bớt lo lắng khi nói, tôi đang cố gắng trình bày ý tưởng của mình trong một nhóm lớn hơn.",
  },
  {
    id: 4,
    en: "moreover, i don't speak english very well.",
    vi: "hơn nữa, tôi nói tiếng anh không tốt lắm.",
  },
  {
    id: 5,
    en:
      "so i am talking part in an english communication course to improve my speaking skill.",
    vi:
      "vì vậy, tôi đang tham gia một khóa học giao tiếp tiếng anh để cải thiện kỹ năng nói của mình.",
  },
];

const question_6 = [
  {
    id: 1,
    en: "sure, when i was a student at cao thang college.",
    vi: "chắc chắn rồi, khi tôi còn là sinh viên trường cao thắng.",
  },
  {
    id: 2,
    en: "i had 4 projects in the same week.",
    vi: "tôi đã có 4 dự án trong cùng một tuần.",
  },
  { id: 3, en: "in order to meet the deadline.", vi: "để đáp ứng thời hạn." },
  {
    id: 4,
    en: "i created a schedule in details to manage my time.",
    vi: "tôi đã tạo một lịch trình chi tiết để quản lý thời gian của mình.",
  },
  {
    id: 5,
    en: "i broke the projects up into smaller steps.",
    vi: "tôi chia nhỏ các dự án thành các bước nhỏ hơn.",
  },
  { id: 6, en: "as the result.", vi: "kết quả là." },
  {
    id: 7,
    en:
      "i finished all the projects and my teacher was happy with the work quality.",
    vi:
      "tôi đã hoàn thành tất cả các dự án và giáo viên của tôi rất vui với chất lượng công việc.",
  },
];

const question_7 = [
  {
    id: 1,
    en:
      "over the next five years, my goals involve growing with a company where i can continue to learn, take on more responsibilities, and contribute as much value as i can.",
    vi:
      "trong năm năm tới, mục tiêu của tôi liên quan đến việc phát triển với một công ty nơi tôi có thể tiếp tục học hỏi, đảm nhận nhiều trách nhiệm hơn và đóng góp nhiều giá trị nhất có thể.",
  },
  {
    id: 2,
    en:
      "i also want to speak english more fluently so that i can exchange the experience with the foreign mechanics.",
    vi:
      "tôi cũng muốn nói tiếng anh trôi chảy hơn để có thể trao đổi kinh nghiệm với các thợ máy nước ngoài.",
  },
];

const question_8 = [
  {
    id: 1,
    en:
      "i think your company has already had the suitable salary policy for the worker.",
    vi:
      "tôi nghĩ quý công ty đã có chính sách lương phù hợp cho người lao động.",
  },
  {
    id: 2,
    en: "so i will follows its range.",
    vi: "vì vậy, tôi sẽ làm theo phạm vi của nó.",
  },
];

const question_9 = [
  {
    id: 1,
    en: "yes, can you tell me what is the biggest challenge in this position.",
    vi:
      "vâng, bạn có thể cho tôi biết thách thức lớn nhất ở vị trí này là gì không?",
  },
  {
    id: 2,
    en: "1 do you have to work in shifts.",
    vi: "1 bạn có phải làm việc theo ca.",
  },
  {
    id: 3,
    en: "2 do i have to work overtime.",
    vi: "2 tôi có phải làm thêm giờ không.",
  },
  {
    id: 4,
    en: "3 do i often make business trips.",
    vi: "3 tôi có thường xuyên đi công tác không.",
  },
  {
    id: 5,
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
let storeSpecified = [];

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

function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; //[5,8]
}

function randomElementInArray(array) {
  return array[Math.floor(Math.random() * (array.length - 1 + 1)) + 1];
}

function randomSpecified(arr) {
  return Math.floor(Math.random() * arr.length); //[0,8]
}

// B1. Kiểm tra trong store đã có số đó chưa.
// B2. Nếu chưa có lưu lại rồi dừng vòng lặp và lấy đi xử lý.
// B3. Nếu đã có thì random 1 con số khác-> nếu trùng thì thực hiện lại.
// B4. Nếu nó đã đủ tất cả các số thì xóa tất cả các số lưu và thực hiện lại từ đầu

function getSpecified() {
  let input_limit = document.getElementById("input_limit").value.trim();
  if (input_limit.length > 0) {
    if (id_limit.style.display === "block") {
      let arr_num = input_limit
        .split(",")
        .map((item) => Number(item))
        .sort((a, b) => a - b);
      return arr_num;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

function checkDuplicate(randNumber) {
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
  return randNumber;
}

function checkDuplicateSpecified(randNumber, onLyQS) {
  for (let i = 0; i < onLyQS.length; i++) {
    if (storeSpecified.length === onLyQS.length) {
      storeSpecified = [];
      break;
    }
    if (storeSpecified.includes(randNumber)) {
      randNumber = randomSpecified(onLyQS);
    } else {
      storeSpecified.push(randNumber);
      break;
    }
  }
  return randNumber;
}

function getQuestion() {
  let randNumber = randomQS();

  //______ Bỏ
  // let onLyQS = getSpecified();
  // if (onLyQS.length > 0) {
  //   // randNumber = randomElementInArray(onLyQS);
  //   // randNumber = checkDuplicateSpecified(randNumber, onLyQS);
  //   // console.log("%ccontent.js line:298 object", "color: #007acc;", randNumber);
  // } else {
  // }
  //______ END Bỏ

  randNumber = checkDuplicate(randNumber);
  const qs = list_question[randNumber];

  return { content: qs, number_rand: randNumber };
}

function textToSpeak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.rate = 0.6;
  window.speechSynthesis.speak(msg);
}

function speakQS() {
  const text = document.getElementById("question").innerText;
  textToSpeak(text);
}

function speakAnswer() {
  const text = document.getElementById("answer").innerText;
  textToSpeak(text);
}

// Hiển thị modal
function handleModal() {
  // Get the modal
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Đóng modal
function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function getAnswer() {
  const number_rand = document.getElementById("number_rand").value;
  const answer = qsRep[`question_${Number(number_rand) + 1}`];

  return answer;
}

function runSpeak() {
  const myText = document.getElementById("answer").innerText;
  const msg = new SpeechSynthesisUtterance(myText);
  window.speechSynthesis.speak(msg);
}

function restartQS() {
  const qs_current = document.getElementById("question").innerText;
  const id_qs_current = document.getElementById("id_qs").value;
  document.getElementById("question_old").innerText = qs_current;
  document.getElementById("id_qs_old").innerText =
    "Chọn câu thứ: " + id_qs_current;
}

function checkCorrect(replyData, answerData) {
  let str = "";

  for (let i = 0; i < answerData.length; i++) {
    if (replyData[i] == answerData[i]) {
      str += replyData[i];
    } else {
      break;
    }
  }
  return str;
}

function handlePercent(correct, answer) {
  return (correct.length / answer.length) * 100;
}

function findAnswerByID() {
  let id_sample = document.getElementById("id_qs").value;
  // Nếu không có giá trị thì gán mặc định là id là 1
  if (id_sample === 0) {
    id_sample = 1;
  }
  const answer = getAnswer();
  // Tìm câu tiếng anh theo id
  let found_sample = answer.find((item) => item.id === Number(id_sample));

  return found_sample;
}

function checkReply() {
  const rep = document.getElementById("input_rep").value.toLowerCase();
  // Kiểm tra xem có nhập không nếu không thì đổi câu hỏi khác
  if (rep) {
    const answer = findAnswerByID().en.toLowerCase();

    // So sánh câu trả lời và đáp án
    if (rep === answer) {
      console.log("Kết thúc", "Success");
      closeModal();
    } else {
      // Đổi câu hỏi khác
      restartQS();

      // Thực hiện tính % câu trả lời
      const correct = checkCorrect(rep, answer);
      const percentCorrect = handlePercent(correct, answer);

      // Hiển thị lên giao diện câu trả lời
      document.getElementById("reply").innerText = "Reply: " + rep;

      // Tính độ chính xác
      document.getElementById("reply_correct").innerText =
        "Correct: " +
        correct +
        " --> " +
        Number.parseFloat(percentCorrect).toFixed(2) +
        "%";

      // Show đáp án
      document.getElementById("answer").innerText = "Answer: " + answer;

      // Show vùng chứa trả lời và dáp án
      document.getElementById("id_footer").style.display = "block";

      // Reset câu trả lời
      document.getElementById("input_rep").value = "";

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

function toggleLimit() {
  let id_limit = document.getElementById("id_limit");
  if (id_limit.style.display === "none") {
    id_limit.style.display = "block";
  } else {
    id_limit.style.display = "none";
  }
}

// Xử lý tương tác với component
function eventClick() {
  // Lấy form submit
  document.getElementById("myForm").addEventListener("submit", handleForm);

  // Chuyển câu hỏi thành giọng nói
  document.getElementById("run_speak_qs").addEventListener("click", speakQS);

  // Chuyển câu trả lời thành giọng nói
  document
    .getElementById("run_speak_answer")
    .addEventListener("click", speakAnswer);

  // Xử lý việc kiểm tra đáp án
  const run_speak = document.getElementById("run_speak");
  run_speak.addEventListener("click", checkReply);

  // ----.

  // Setting khác.
  document.getElementById("id_settings").addEventListener("click", toggleLimit);
}

// Khởi tạo câu hỏi đầu tiên.
function initQuestion() {
  // Lấy câu hỏi random.
  const qs = getQuestion();
  document.getElementById("question").innerText = qs["content"];
  document.getElementById("number_rand").value = qs["number_rand"];

  const table = document.getElementById("id_table_sample");

  const answer = getAnswer();
  let row = "<tr>";
  answer.map((col, index) => {
    row += `<th><button id="sample_${
      index + 1
    }" type="button" class="btn_sample"  >${index + 1}</button></th>`;
  });
  row += "</tr>";

  table.innerHTML = row;

  initMutipleClick();
}

function onSample(id) {
  document.getElementById("id_qs").value = id;
}

// Tạo trang bằng javascript
function createElementPage() {
  const html_page = `<h1>Tool write by Khương</h1>
	<h2>Extension</h2>

	<!-- The Modal -->
	<div id="myModal" class="modal">

		<!-- Modal content -->
		<div class="modal-content" style="margin:auto;">
			<div class="modal-header">
				<div style="display: flex;justify-content:space-between;">
					<div style="display: flex;flex-direction: row;justify-content:space-between;">
						<h2 id="question" style="color:white;" class="id_h2"></h2>
						<input id="number_rand" value="" type="hidden"></input>
						<input id="id_qs" value="1" type="hidden"></input>

						<button id="run_speak_qs"
							style="background-color:white;border:none;opacity: 0.6;border-radius:90px;margin-left:10px;">~(Speak)~</button>
					</div>


					<button
						style="display:none;background-color:white;border:none;opacity: 0.6;border-radius:90px;margin-left:10px;"
						id="id_settings">~(Settings)~</button>

				</div>
				<div class="fomrgroup" style="display: none;flex-direction: row;justify-content: flex-end;"
					id="id_limit">
					<input type="text" name="input_rep" id="input_limit" value="" style="width:100px;"
						class="input_form">
				</div>

			</div>
			<div class="modal-body">
				<table style="width:100%" id="id_table_sample">

				</table>
				<form action="#" id="myForm" autocomplete="off">
					<div class="fomrgroup">
						<input type="text" name="input_rep" id="input_rep" value="" style="width:100%;"
							class="input_form" autofocus>
					</div>

					<div class="fomrgroup" style="margin-top:10px;">
						<button id="run_speak" type="button" class="input_submit">Kiểm tra</button>
					</div>
				</form>
			</div>
			<div class="modal-footer" style="display:none;background-color:#333;" id="id_footer">
				<table style="width:100%">
					<tr>
						<th>
							<div style="width:100%;display: flex;margin-top: 20px;">
								<h4 id="question_old" style="text-align: left;color:rgba(255, 255, 255, 0.63)"
									class="id_h4">
								</h4>
							</div>
						</th>
					</tr>
					<tr>
						<th>
							<div style="width:100%;display: flex;margin-top: 20px;">
								<h4 id="id_qs_old" style="text-align: left;color:rgba(255, 255, 255, 0.63)"
									class="id_h4">
								</h4>
							</div>
						</th>
					</tr>
					<tr>
						<td>
							<div style="width:100%;display: flex;">
								<h6 id="reply" style="text-align: left;color:rgba(255, 255, 255, 0.46)" class="id_h6">
								</h6>
							</div>
						</td>

					</tr>
					<tr>
						<td>
							<div style="width:100%;display: flex;">
								<h6 id="reply_correct" style="text-align: left;color:#4bb543;" class="id_h5"></h6>
							</div>
						</td>

					</tr>

					<tr>
						<td>
							<div style="width:100%;display: flex;">
								<h6 id="answer" style="text-align: left;color:rgba(255, 255, 255, 0.46);" class="id_h6">
								</h6>
								<button id="run_speak_answer"
									style="background-color:white;border:none;opacity: 0.6;border-radius:90px;margin-left:10px;"><span
										style="color:#333;">~(Speak)~</span></button>
							</div>
						</td>

					</tr>

				</table>





			</div>
		</div>



	</div>`;

  const node = document.createElement("div");
  node.innerHTML += html_page;
  // Auto in và page facebook không cần chạy extension
  document.body.appendChild(node);
}

// let idChecked = [];
// idChecked = [item.innerText];

function initMutipleClick() {
  // -----. Handle Click Multiple Choice.
  document.querySelectorAll(".btn_sample").forEach((item) => {
    item.addEventListener("click", (event) => {
      //handle click
      onSample(item.innerText);
      if (item.style.backgroundColor === "red") {
        item.style.backgroundColor = "#007bff";
      } else {
        item.style.backgroundColor = "red";
      }
    });
  });
}

window.onload = () => {
  console.log("page is fully loaded");
  createElementPage();
  handleModal();
  eventClick();
  initQuestion();
};
