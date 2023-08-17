
const ioHook = require('iohook');

let keysInfo = {
	"8": { label: "删除键Backspace", value: "backspace", keyCode: "8" },
	"9": { label: "Tab键", value: "tab", keyCode: "9" },
	"13": { label: "回车键Enter", value: "enter", keyCode: "13" },
	"16": { label: "Shift键", value: "shift", keyCode: "16" },
	"17": { label: "Ctrl键", value: "control", keyCode: "17" },
	"18": { label: "Alt键", value: "alt", keyCode: "18" },
	"20": { label: "大小写键CapsLock", value: "capslock", keyCode: "20" },
	"27": { label: "Esc键", value: "escape", keyCode: "27" },
	"32": { label: "空格键Space ", value: "space", keyCode: "32" },
	"33": { label: "翻页上键PageUp", value: "pageup", keyCode: "33" },
	"34": { label: "翻页下键PageDown", value: "pagedown", keyCode: "34" },
	"35": { label: "末尾键End", value: "end", keyCode: "35" },
	"36": { label: "首页键Home", value: "home", keyCode: "36" },
	"37": { label: "左箭头Left", value: "left", keyCode: "37" },
	"38": { label: "上箭头Up", value: "up", keyCode: "38" },
	"39": { label: "右箭头Right", value: "right", keyCode: "39" },
	"40": { label: "下箭头Down", value: "down", keyCode: "40" },
	"46": { label: "删除键Delete", value: "delete", keyCode: "46" },
	"48": { label: "数字0", value: "0", keyCode: "48" },
	"49": { label: "数字1", value: "1", keyCode: "49" },
	"50": { label: "数字2", value: "2", keyCode: "50" },
	"51": { label: "数字3", value: "3", keyCode: "51" },
	"52": { label: "数字4", value: "4", keyCode: "52" },
	"53": { label: "数字5", value: "5", keyCode: "53" },
	"54": { label: "数字6", value: "6", keyCode: "54" },
	"55": { label: "数字7", value: "7", keyCode: "55" },
	"56": { label: "数字8", value: "8", keyCode: "56" },
	"57": { label: "数字9", value: "9", keyCode: "57" },
	"65": { label: "字母a", value: "a", keyCode: "65" },
	"66": { label: "字母b", value: "b", keyCode: "66" },
	"67": { label: "字母c", value: "c", keyCode: "67" },
	"68": { label: "字母d", value: "d", keyCode: "68" },
	"69": { label: "字母e", value: "e", keyCode: "69" },
	"70": { label: "字母f", value: "f", keyCode: "70" },
	"71": { label: "字母g", value: "g", keyCode: "71" },
	"72": { label: "字母h", value: "h", keyCode: "72" },
	"73": { label: "字母i", value: "i", keyCode: "73" },
	"74": { label: "字母j", value: "j", keyCode: "74" },
	"75": { label: "字母k", value: "k", keyCode: "75" },
	"76": { label: "字母l", value: "l", keyCode: "76" },
	"77": { label: "字母m", value: "m", keyCode: "77" },
	"78": { label: "字母n", value: "n", keyCode: "78" },
	"79": { label: "字母o", value: "o", keyCode: "79" },
	"80": { label: "字母p", value: "p", keyCode: "80" },
	"81": { label: "字母q", value: "q", keyCode: "81" },
	"82": { label: "字母r", value: "r", keyCode: "82" },
	"83": { label: "字母s", value: "s", keyCode: "83" },
	"84": { label: "字母t", value: "t", keyCode: "84" },
	"85": { label: "字母u", value: "u", keyCode: "85" },
	"86": { label: "字母v", value: "v", keyCode: "86" },
	"87": { label: "字母w", value: "w", keyCode: "87" },
	"88": { label: "字母x", value: "x", keyCode: "88" },
	"89": { label: "字母y", value: "y", keyCode: "89" },
	"90": { label: "字母z", value: "z", keyCode: "90" },
	"96": { label: "小数字键盘0", value: "numpad_0", keyCode: "96" },
	"97": { label: "小数字键盘1", value: "numpad_1", keyCode: "97" },
	"98": { label: "小数字键盘2", value: "numpad_2", keyCode: "98" },
	"99": { label: "小数字键盘3", value: "numpad_3", keyCode: "99" },
	"100": { label: "小数字键盘4", value: "numpad_4", keyCode: "100" },
	"101": { label: "小数字键盘5", value: "numpad_5", keyCode: "101" },
	"102": { label: "小数字键盘6", value: "numpad_6", keyCode: "102" },
	"103": { label: "小数字键盘7", value: "numpad_7", keyCode: "103" },
	"104": { label: "小数字键盘8", value: "numpad_8", keyCode: "104" },
	"105": { label: "小数字键盘9", value: "numpad_9", keyCode: "105" },
	"112": { label: "F1键", value: "f1", keyCode: "112" },
	"113": { label: "F2键", value: "f2", keyCode: "113" },
	"114": { label: "F3键", value: "f3", keyCode: "114" },
	"115": { label: "F4键", value: "f4", keyCode: "115" },
	"116": { label: "F5键", value: "f5", keyCode: "116" },
	"117": { label: "F6键", value: "f6", keyCode: "117" },
	"118": { label: "F7键", value: "f7", keyCode: "118" },
	"119": { label: "F8键", value: "f8", keyCode: "119" },
	"120": { label: "F9键", value: "f9", keyCode: "120" },
	"121": { label: "F10键", value: "f10", keyCode: "121" },
	"122": { label: "F11键", value: "f11", keyCode: "122" },
	"123": { label: "F12键", value: "f12", keyCode: "123" },
};


//ioHook.start(false);
const eventHandler = e => {
	switch (e.type) {
		case 'keydown': {
			if (keysInfo[e.rawcode]) {
				console.log(keysInfo[e.rawcode].label)
			} else {
				console.log(e)
			}
			break; 
		}
	}
}
ioHook.on('mouseclick', eventHandler);
ioHook.on('mousedown', eventHandler);
ioHook.on('mouseup', eventHandler);
ioHook.on('mousedrag', eventHandler);
ioHook.on('mousewheel', eventHandler);
ioHook.on('keyup', eventHandler);
ioHook.on('keydown', eventHandler);

setTimeout(() => {
	console.log('开启')
	ioHook.start();
},1000)
setTimeout(() => {
	console.log('暂停')
    ioHook.stop();
},3000)
setTimeout(() => {
	console.log('开启')
	ioHook.start();
},5000)
setTimeout(() => {
	console.log('关闭')
    ioHook.unload();
},8000)
 /*
app.on('before-quit', () => {
    // 卸载iohook监听
    ioHook.unload();
    ioHook.stop();
});*/