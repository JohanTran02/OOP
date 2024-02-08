function Color(r, g, b, a = "1") {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
}

Color.prototype.rgb = function () {
    return `rgb(${this.r},${this.g},${this.b})`;
}

Color.prototype.rgba = function () {
    return `rgba(${this.r},${this.g},${this.b},${this.a})`;
}

Color.prototype.hex = function () {
    return `#${this.convertToHex(this.r)}${this.convertToHex(this.g)}${this.convertToHex(this.b)}`;
}

Color.prototype.convertToHex = function (hex) {
    const hexCode = hex.toString(16);
    return hexCode.length === 1 ? "0" + hexCode : hexCode;
}

const color = new Color(106, 135, 139);

console.log(color.rgb());
console.log(color.rgba());
console.log(color.hex());
