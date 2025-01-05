const backButton = document.getElementById('backButton');
    const sections = document.querySelectorAll('.section');
    const channelsDivs = document.querySelectorAll('.channels');
    const headerTitle = document.querySelector('#header h1');

    // إعداد صورة افتراضية
    const defaultImageSrc = 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxlegowTV89qwUU7M4lVGBnIimwC_NZNRPnOXiO5-NC4uwRGL-iRM-83pH3w38eSASAbtgllAJ6sRp9dc860OCI0eElbhp2poE1tBafj00AloDlXUxDWOHdC96naxNnoowvcyiVUxhxsaIzPVPlwCEr33OZ5IaGgl_gFlnZRxX6Af3bSXCDqwVtkzgN4c/s320/S5.png'; // مسار الصورة الافتراضية

    // ضبط الصورة الافتراضية عند فشل تحميل الصورة
    function setDefaultImage(imgElement) {
      imgElement.src = defaultImageSrc;
    }

    // إظهار القنوات عند الضغط على القسم
    function showChannels(section) {
      // تحديث نص العنوان في الهيدر بناءً على اسم القسم
      headerTitle.textContent = section.toUpperCase();

      // إخفاء جميع الأقسام
      sections.forEach(section => section.style.display = 'none');

      // إخفاء جميع القنوات
      channelsDivs.forEach(channel => channel.classList.remove('active'));

      // إظهار القنوات الخاصة بالقسم المحدد
      const activeChannel = document.getElementById(section);
      if (activeChannel) {
        activeChannel.classList.add('active');
      } else {
        console.warn(`لا يوجد قسم بقيمة: ${section}`);
      }

      // إظهار زر الرجوع
      backButton.style.display = 'block';
    }

    // إرجاع جميع الأقسام وإخفاء القنوات
    function showSections() {
      // إظهار جميع الأقسام
      sections.forEach(section => section.style.display = 'block');

      // إخفاء جميع القنوات
      channelsDivs.forEach(channel => channel.classList.remove('active'));

      // إخفاء زر الرجوع
      backButton.style.display = 'none';

      // إعادة النص في الهيدر إلى النص الافتراضي
      headerTitle.textContent = 'RAYAN TV';
    }
    
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        const openSidebarBtn = document.getElementById("open-sidebar");

        openSidebarBtn.addEventListener("click", () => {
            sidebar.classList.add("open");
            overlay.classList.add("active");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("open");
            overlay.classList.remove("active");
        });

        // بيانات القنوات
const channels = [
    "BeIN Sports",
    "SPORTS HD",
    "Documentary",
    "Kids",
    "Mbc",
    "Islam",
    "News",
    "Netflix",
    "Prime Video",
    "Morocco",
    "Egypt",
    "Saudi Arabia",
    "Algeria",
    "Tunisia",
    "United Arab Emirates",
    "Jordan",
    "Spain",
    "France",
    "Turkey",
    "Germany",
    "Italy",
    "United Kingdom",
    "Portugal",
    "Netherlands",
    "Belgium",
    "United States",
    "Canada",
    "Brazil",
    "Argentina",
    "Mexico",
    "Arryadia"
];
        const searchIcon = document.getElementById('search-icon');
        const searchPopup = document.getElementById('search-popup');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');

        // فتح واجهة البحث
        searchIcon.addEventListener('click', () => {
            searchPopup.style.display = 'flex';
            searchInput.focus();
        });

        // إغلاق واجهة البحث عند النقر خارجها
        searchPopup.addEventListener('click', (e) => {
            if (e.target === searchPopup) {
                searchPopup.style.display = 'none';
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });

        // البحث وعرض النتائج
        searchInput.addEventListener('input', () => {
            const query = searchInput.value.trim();
            searchResults.innerHTML = '';

            if (query) {
                const filteredChannels = channels.filter(channel =>
                    channel.includes(query)
                );

                if (filteredChannels.length > 0) {
                    filteredChannels.forEach(channel => {
                        const p = document.createElement('p');
                        p.textContent = channel;
                        searchResults.appendChild(p);
                    });
                } else {
                    searchResults.innerHTML = '<p>لا توجد نتائج</p>';
                }
            }
        });

        // اختيار قناة من النتائج
        searchResults.addEventListener('click', (e) => {
            if (e.target.tagName === 'P') {
                alert(`تم اختيار: ${e.target.textContent}`);
                searchPopup.style.display = 'none';
                searchInput.value = '';
                searchResults.innerHTML = '';
            }
        });

            function openPlayer(videoUrl, channelName) {
            // الانتقال إلى صفحة المشغل مع تمرير الرابط واسم القناة
            window.location.href = `player.html?src=${encodeURIComponent(videoUrl)}&name=${encodeURIComponent(channelName)}`;
        }
 
    const shareButton = document.getElementById('shareButton');

    // تحقق من دعم Web Share API
    if (navigator.share) {
      shareButton.addEventListener('click', async () => {
        try {
          await navigator.share({
            title: 'شارك هذه الصفحة', // العنوان
            text: 'تعرف على محتوى رائع هنا!', // وصف الصفحة
            url: window.location.href, // رابط الصفحة الحالي
          });
          console.log('تمت المشاركة بنجاح!');
        } catch (error) {
          console.error('حدث خطأ أثناء المشاركة:', error);
        }
      });
    } else {
      // إذا لم يكن Web Share API مدعومًا
      shareButton.disabled = true;
      shareButton.textContent = '';
    }

    // تحقق من دعم إشعارات المتصفح
    if ("Notification" in window) {
      // تحقق من حالة الإذن الحالية
      if (Notification.permission === "default") {
        // طلب الإذن عند فتح الصفحة
        document.addEventListener("DOMContentLoaded", () => {
          Notification.requestPermission().then(permission => {
            if (permission === "granted") {
              // إظهار إشعار إذا وافق المستخدم
              new Notification("شكرًا للسماح!", {
                body: "سوف نرسل لك الإشعارات عند الحاجة.",
                icon: "https://via.placeholder.com/100", // أيقونة الإشعار (اختياري)
              });
            } else if (permission === "denied") {
              console.log("تم رفض الإذن بالإشعارات.");
            }
          });
        });
      } else if (Notification.permission === "granted") {
        console.log("الإشعارات مسموح بها بالفعل.");
      } else {
        console.log("الإشعارات غير مسموح بها.");
      }
    } else {
      console.log("الإشعارات غير مدعومة في هذا المتصفح.");
    }