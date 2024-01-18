// script.js
document.addEventListener('DOMContentLoaded', function () {
    const greetingText = "안녕하세요!";
    const badgeElement = document.getElementById('greetingBadge');

    function animateText(text, index) {
        if (index < text.length) {
            badgeElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(function () {
                animateText(text, index);
            }, 100); // 100ms 간격으로 애니메이션 실행 (원하는 속도로 조절 가능)
        }
    }

    animateText(greetingText, 0);
});
