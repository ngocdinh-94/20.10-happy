# Sự thức giấc của Tiny - Ngày 20/10

Website tương tác Tiny Story, tiếp nối câu hỏi "và giúp tớ bước ra ngoài đời thực được chứ?" bằng một lời chúc 20/10 dành riêng cho người xem.

Live demo: https://bb99kra.github.io/20-10/

## Chạy project

Mở `index.html` trực tiếp trong trình duyệt. Project dùng JavaScript thuần, không cần cài package hay build.

## Tùy chỉnh

- Sửa nội dung, cấu trúc cảnh và giao diện trong `index.html`.
- `js/story.js`: luồng câu chuyện, tương tác và chuyển cảnh chính.
- `js/october-wish.js`: chuyển từ cảnh kết sang màn hình lời chúc 20/10.
- `js/story-ambient.js`: sao và sao băng nền.
- `js/kado-flower-init.js`: khởi tạo hoa trong cảnh nụ cười.
- `js/upgrade-particles.js`: hạt trang trí và hiệu ứng chúc mừng.
- `js/final-garden-health-motions.js`: cảnh khu vườn và chuyển động trang trí.
- `js/reality-moon-rover.js`: hiệu ứng xe thám hiểm.
- `js/mobile-lifecycle.js`, `js/beauty-mobile-cull.js`: tối ưu hiệu ứng trên thiết bị di động.
- `js/tiny-performance-profile.js`, `js/v10-desktop-profile.js`, `js/v12-desktop-beauty-scope.js`: cấu hình hiệu năng theo thiết bị.

Các script được nạp bằng thẻ `<script>` thường theo đúng thứ tự trong `index.html`; giữ thứ tự này khi thêm hoặc di chuyển script. Ảnh, âm thanh và video hiện được nhúng trong HTML nên không cần thư mục asset riêng.
