Hướng Dẫn Quy Trình Git cho Dự Án Shopee Clone

Tài liệu này mô tả quy trình sử dụng Git để đóng góp vào dự án Shopee Clone.

A. Cấu Hình Ban Đầu

Fork kho lưu trữ từ GitHub của leader:

Fork từ: https://github.com/minhtris25/Shopee_clone.git

Clone kho đã fork về máy cục bộ:

git clone https://github.com/<tên-người-dùng-của-bạn>/Shopee_clone.git

Thêm kho của leader làm remote:

git remote add leader https://github.com/minhtris25/Shopee_clone.git

B. Làm Việc Với Nhiệm Vụ Mới

Tạo nhánh mới:

git checkout -b <tên-nhánh>

Commit các thay đổi:

git add .

git commit -m "<nội-dung-commit>"

Push nhánh lên GitHub:

git push origin <tên-nhánh>

Tạo Pull Request (PR) trên GitHub và đợi merge.

Chuyển về nhánh main:

git checkout main

Kéo code mới nhất từ kho của leader:

git pull leader main
