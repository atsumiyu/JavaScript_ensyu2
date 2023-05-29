'use strict';

let allNum = 25;
const getStone = 3;

let player = 'A';

let num1 = 0;

let stone = '*************************';

document.getElementById('remain').textContent = '残り：' + allNum + '個';
document.getElementById('rem_stone').textContent = stone;
document.getElementById('turn').textContent = 'プレイヤー' + player + 'の番です';


document.getElementById('input').addEventListener('click', () => {
    
    if (0 < allNum && allNum <= 25) {

        num1 = Number(document.getElementById('stone_num').value);
        if (0 < num1 && num1 <= 3) {
            allNum = allNum - num1;
            stone = '';
            for (let i = 0; i < allNum; i++) {
                stone += '*';
            }
            document.getElementById('remain').textContent = '残り：' + allNum + '個';
            document.getElementById('rem_stone').textContent = stone;
            if (player === 'A') {
                player = 'B';
            } else {
                player = 'A';
            }
            document.getElementById('turn').textContent = 'プレイヤー' + player + 'の番です';
            document.getElementById('pick_up_num').textContent = '石の数を入力してください(1～3の値まで入力可能です)';
        } else {
            document.getElementById('remain').textContent = '1～3の値を入力してください';
        }

        if (allNum <= 0) {
            document.getElementById('remain').textContent = 'プレイヤー' + player + 'の勝ちです';
            document.getElementById('rem_stone').textContent = '';
            document.getElementById('turn').textContent = '';
            document.getElementById('pick_up_num').textContent = '';
        }
    } else if (allNum <= 0) {
        document.getElementById('game').textContent = 'ゲーム終了です';
    }


});

document.getElementById('reset').addEventListener('click', () => {
    allNum = 25;
    let player = 'A';
    let num1 = 0;
    let stone = '*************************';

    document.getElementById('remain').textContent = '残り：' + allNum + '個';
    document.getElementById('rem_stone').textContent = stone;
    document.getElementById('turn').textContent = 'プレイヤー' + player + 'の番です';

});


//     // const avg = sum / 3;
//     // document.getElementById('sum').textContent = '合計：' + sum;
//     // document.getElementById('avg').textContent = '平均：' + avg;

// }


