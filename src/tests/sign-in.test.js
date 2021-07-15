import { multiplyBoth, mumbling } from './all-tests';
// import { multiplyBoth, mumbling } from '../Main/Components/SignIn/sign-In'
// const multiplyBoth = require('../Main/Components/SignIn/sign-In');
// const mumbling = require('../Main/Components/SignIn/sign-In');

test("this is a test", () => {
    expect(multiplyBoth(0,2)).toBe(0),
    expect(multiplyBoth(1,2)).toBe(2), 
    expect(multiplyBoth(2,3)).toBe(6), 
    expect(multiplyBoth(5,9)).toBe(45),
    expect(multiplyBoth(10,23)).toBe(230)
})

test('Create a string of a string, with the original string char position be how many char to make for new string', () =>{
    expect(mumbling("ZpglnRxqenU")).toBe("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"),
    expect(mumbling("NyffsGeyylB")).toBe("N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"),
    expect(mumbling("MjtkuBovqrU")).toBe("M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"),
    expect(mumbling("EvidjUnokmM")).toBe("E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm"),
    expect(mumbling("HbideVbxncC")).toBe("H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc"),
    expect(mumbling("BjdkNMN")).toBe("B-Jj-Ddd-Kkkk-Nnnnn-Mmmmmm-Nnnnnnn"),
    expect(mumbling("JHgfbfmn")).toBe("J-Hh-Ggg-Ffff-Bbbbb-Ffffff-Mmmmmmm-Nnnnnnnn"),
    expect(mumbling("hdoquwHdn")).toBe("H-Dd-Ooo-Qqqq-Uuuuu-Wwwwww-Hhhhhhh-Dddddddd-Nnnnnnnnn")
})