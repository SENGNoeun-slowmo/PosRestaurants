const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// តភ្ជាប់ MongoDB (ប្តូរជាមួយ URL របស់អ្នកពី MongoDB Atlas)
mongoose.connect('mongodb+srv://sengnoeun3_db_user:0M4e9DOahN6rdRO6@cluster0.mfggzhp.mongodb.net/?appName=Cluster0');

// គំរូទិន្នន័យកម្មង់
const orderSchema = new mongoose.Schema({
  table: Number,
  items: [String],
  status: { type: String, default: 'pending' },
  timestamp: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', orderSchema);

// ទំព័រម៉ឺនុយសម្រាប់អតិថិជន// បន្ថែមក្នុងកំពូលឯកសារ (បន្ទាប់ពី const Order = ...)
const QRCode = require('qrcode');

// ទំព័រគ្រប់គ្រង QR Code (GET)
app.get('/admin/qr', (req, res) => {
  res.render('admin-qr', { qrCode: null, table: null });
});

// បង្កើត QR Code (POST)
// បង្កើត QR Code (POST)
app.post('/admin/qr', async (req, res) => {
  const table = req.body.table;
  
  if (!table) {
    return res.render('admin-qr', { qrCode: null, table: null });
  }

  // ប្រើ IP ពិតប្រាកដរបស់អ្នក
  const url = `http://10.221.243.86:3000/order?table=${table}`;

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff'
      }
    });

    res.render('admin-qr', { 
      qrCode: qrCodeDataUrl, 
      table: table 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('មានបញ្ហាក្នុងការបង្កើត QR Code');
  }
});
app.get('/order', (req, res) => {
  const table = req.query.table || 'មិនស្គាល់';
  res.render('order', { table });
});

// ទទួលកម្មង់ពីអតិថិជន
app.post('/order', async (req, res) => {
  const { table, items } = req.body;
  const newOrder = new Order({
    table: parseInt(table),
    items: Array.isArray(items) ? items : [items]
  });
  await newOrder.save();
  io.emit('newOrder', newOrder); // ផ្ញើជូនដំណឹងទៅផ្ទះបាយភ្លាម
  res.send('<h2 style="text-align:center; color:green;">កម្មង់ជោគជ័យ! សូមរង់ចាំបន្តិច...</h2>');
});

// ទំព័រផ្ទះបាយ
app.get('/kitchen', async (req, res) => {
  const orders = await Order.find({ status: 'pending' }).sort({ timestamp: -1 });
  res.render('kitchen', { orders });
});

// សម្គាល់ថាធ្វើរួច
app.post('/kitchen/done/:id', async (req, res) => {
  await Order.findByIdAndUpdate(req.params.id, { status: 'done' });
  io.emit('orderUpdated');
  res.redirect('/kitchen');
});

server.listen(3000, () => {
  console.log('Server ដំណើរការនៅ port 3000');
});