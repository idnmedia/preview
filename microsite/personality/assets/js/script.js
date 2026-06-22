let currentQuestion = 0;
    let correctCount = 0;
    let totalScore = 0;
    let attempts = [0, 0, 0];
    let userName = '';
    let lastWrong = 0;
    const questions = document.querySelectorAll('.question');

    function submitNameAndStart() {
      const input = document.getElementById('userName').value.trim();
      if (input === '') {
        alert('Nama belum diisi!');
        return;
      }
      userName = input;
      localStorage.setItem('currentUser', userName);
      document.getElementById('nameInputSection').style.display = 'none';
      document.getElementById('quiz').style.display = 'block';
      showQuestion(currentQuestion);
      updateLiveScore();
      const bgm = document.getElementById('backgroundMusic');
      bgm.volume = 0.2;
      bgm.play().catch(e => console.warn("Autoplay diblokir", e));
    }

    function showQuestion(index) {
      questions.forEach(q => q.classList.remove('active'));
      if (questions[index]) questions[index].classList.add('active');
    }

    function updateLiveScore() {
      for (let i = 0; i < attempts.length; i++) {
        const el = document.getElementById(`liveScore${i}`);
        if (el) el.textContent = totalScore;
      }
    }

    function checkAnswer(qIndex, status) {
      attempts[qIndex]++;
      if (status === 'benar') {
        document.getElementById('soundBenar').play();
        let points = 5;
        if (attempts[qIndex] === 1) points = 10;
        else if (attempts[qIndex] === 2) points = 8;
        else if (attempts[qIndex] === 3) points = 7;
        totalScore += points;
        updateLiveScore();
        correctCount++;
        document.getElementById('jawabanBenar').style.display = 'block';
        questions[qIndex].classList.remove('active');
        setTimeout(() => {
          document.getElementById('jawabanBenar').style.display = 'none';
          currentQuestion++;
          if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
          } else {
            showResult();
          }
        }, 2000);
      } else {
        document.getElementById('soundSalah').play();
        document.getElementById('jawabanSalah').style.display = 'block';
        questions[qIndex].classList.remove('active');
        lastWrong = qIndex;
      }
    }

    function goBackToQuestion() {
      document.getElementById('jawabanSalah').style.display = 'none';
      showQuestion(lastWrong);
    }

    function showResult() {
      document.getElementById('quiz').style.display = 'none';
      document.getElementById('resultPage').style.display = 'block';
      document.getElementById('score').innerHTML = `
        Nama: <strong>${userName}</strong><br />
        Jawaban benar: ${correctCount} dari ${questions.length}<br />
        Total Skor: ${totalScore} poin
      `;
      displayTrophies();
      saveToLeaderboard(userName, totalScore);
      renderLeaderboard();
      document.getElementById('soundResult').play();
    }

    function displayTrophies() {
      const container = document.getElementById('trophyContainer');
      container.innerHTML = '';
      let trophySrc = '';
      let count = 0;
      if (totalScore >= 30) {
        trophySrc = 'https://cdn-icons-png.flaticon.com/512/2583/2583343.png';
        count = 3;
      } else if (totalScore >= 25) {
        trophySrc = 'https://cdn-icons-png.flaticon.com/512/2583/2583339.png';
        count = 2;
      } else {
        trophySrc = 'https://cdn-icons-png.flaticon.com/512/2583/2583337.png';
        count = 1;
      }
      for (let i = 0; i < count; i++) {
        const img = document.createElement('img');
        img.src = trophySrc;
        img.alt = 'Trophy';
        container.appendChild(img);
      }
    }

    function saveToLeaderboard(name, score) {
      let data = JSON.parse(localStorage.getItem('leaderboard') || '[]');
      data.push({ name, score });
      data.sort((a, b) => b.score - a.score);
      data = data.slice(0, 10);
      localStorage.setItem('leaderboard', JSON.stringify(data));
    }

    function renderLeaderboard() {
      const list = document.getElementById('leaderboardList');
      const data = JSON.parse(localStorage.getItem('leaderboard') || '[]');
      list.innerHTML = '';
      data.forEach((entry) => {
        const li = document.createElement('li');
        li.textContent = `${entry.name} - ${entry.score} poin`;
        list.appendChild(li);
      });
    }

    function restartGame() {
      window.location.href = window.location.pathname;
    }


    function goToHome() {
      window.location.href = '../index.html';
    }
