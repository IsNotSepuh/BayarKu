const config = {
      paymentMethods: {
        /*
        Ubah Qris Lu!
        Pakein Link/Jpeg/Jpg/Png
        cth format foto lu:
        'nama-qr.png'
        */
        qris: 'https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=https://example.com/qris-payment/12345'
      }
    };

    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
          document.getElementById('loading').classList.add('hidden');
          document.getElementById('content').classList.remove('hidden');
        }, 500);
      }, 2500);

      document.getElementById('startBtn').addEventListener('click', () => {
        document.getElementById('welcome').style.opacity = '0';
        setTimeout(() => {
          document.getElementById('welcome').classList.add('hidden');
          document.getElementById('paymentMethods').classList.remove('hidden');
        }, 500);
      });
    });

    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        showNotification(`Tersalin: ${text}`);
      }).catch(err => {
        console.error('Gagal menyalin: ', err);
        showNotification('Gagal menyalin. Coba lagi.');
      });
    }

    function openZoomQR() {
      const modal = document.getElementById('qrModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeZoomQR() {
      const modal = document.getElementById('qrModal');
      modal.classList.add('hidden');
      document.body.style.overflow = ''; // Enable scrolling
    }

    function openLink(url) {
      window.open(url, '_blank');
    }

    function showNotification(message) {
      const notification = document.getElementById('notification');
      const notificationText = document.getElementById('notificationText');

      notificationText.textContent = message;
      notification.classList.remove('hidden');

      setTimeout(() => {
        notification.classList.add('hidden');
      }, 3000);
    }

    console.log('%cBayarKu Payment Gateway', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
    console.log(`%c>> Sistem pembayaran siap digunakan\nPowered By MatrixMan\n t.me/mtrixman`, 'color: #10b981;');
