
// book_root_ref 是整個資料夾的根，可以想像成每個會員有一個根
var book_root_ref = firebaseAdmin.database().ref('book_root_ref');

// each_book_ref 是輸入每本書，用 push 的方法實作，所以會有一個 key
var each_book_ref = book_root_ref.push();

// each_book_key 是每本書在輸入的時候，根據上面 push 方法所產生出的 key
var each_book_key = each_book_ref.key;

// 第一頁
router.post('/book_name/create', multer.single('bookimage'), (req, res) => {
    
    // 第一頁，寫入書名
    each_book_ref.set({
        'book_name': req.body.bookname
    });
    res.redirect('/review/test-review-2');
})

// 第二頁
router.post('/book_feeling/create', (req, res) => {
    
    // 這邊將剛剛輸入的書的 key 拉回來，在根下面更新加入 book_feeling
    book_root_ref.child(each_book_key).update({
        'book_feeling': req.body.book_feeling
    });
    res.send('/review/test-review-3');
})