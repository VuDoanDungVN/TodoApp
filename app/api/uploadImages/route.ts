import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

const saveImageAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { thumbnail } = req.body;

      // Kiểm tra xem có tệp được gửi từ client hay không
      if (!thumbnail) {
        return res.status(400).json({ error: 'No image file provided' });
      }

      // Thư mục để lưu trữ tệp ảnh trong public
      const uploadDir = path.join(process.cwd(), 'public', 'images', 'thumbnail');

      // Tạo thư mục nếu chưa tồn tại
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      // Tên tệp ảnh (lấy từ thời điểm hiện tại để tránh trùng lặp)
      const fileName = `${Date.now()}.png`;

      // Đường dẫn tới tệp ảnh mới
      const filePath = path.join(uploadDir, fileName);

      // Ghi tệp ảnh vào thư mục public
      fs.writeFileSync(filePath, thumbnail);

      // Trả về đường dẫn tới tệp ảnh đã lưu
      return res.status(200).json({ imagePath: `/images/thumbnail/${fileName}` });
    } catch (error) {
      console.error('Error saving image:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default saveImageAPI;
