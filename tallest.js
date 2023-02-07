function tallestFriend(height) {
    const numOfFriends = height.length;
    let tallest = height[0];
    for (let i = 0; i < numOfFriends; i++) {
        if (height[i] > tallest) {
            tallest = height[i];
        }
    }
    return tallest;
}
console.log(tallestFriend([157, 134, 188, 122, 245, 234]));