const inputName = "John"
const inputValue = 42

const data = {
    [inputName]: inputValue
}
console.log(data)

const playlist = {
    name: "My Playlist", 
    raiting : 5, 
    tracks: ["track-1"],
    trackCount: 1,
    getName (newName) {
        return this.name = newName
    },
    addTracks (track) {
        return this.tracks.push(track)
    },
    updateRating (newRating) {
        return this.raiting = newRating
    },
    getTrackCount () {
        return this.tracks.length
    }
}

console.log(playlist.getName("Нова машина"))
console.log(playlist.addTracks("track-2"))
console.log(playlist.updateRating(4))
console.log(playlist)

const feetback = {
    good: 5,
    neutral: 3,
    bad: 1
}

const keys = Object.keys(feetback)
console.log(keys)

for (const key of keys) {
    console.log(key)
    feetback[key]
}

const values = Object.values(feetback)
console.log(values)

for (const value of values) {
    console.log(value)
}

const entries = Object.entries(feetback)
console.log(entries)

for (const entry of entries) {
    const [key, value] = entry
console.log(` ${key}, ${value}`)
}

const friends = [
    {name: "Poly", online: true}, 
    {name: "Bady", online: false}, 
    {name: "Trio", online: true}, 
    {name: "Alex", online: true}
]

const findName = "Alex"

const findFriendByName = function (friends, name) {
    for (const friend of friends) {
        if (friend.name === name) {
            return `${name} знайшли`
        }
    }
    return `${name} не знайшли`
}
console.log(findFriendByName(friends))

const findFriendByName2 = function (friends) {
    const names = []

    for (const friend of friends) {
        names.push(friend.name)
    }

    return names
}
console.log(findFriendByName2(friends))

const onlineFriendByName = function (friends) {
    const onlineFriends = []

    for (const friend of friends) {
        if (friend.online) {
            onlineFriends.push(friend)
        }
    }

    return onlineFriends
}
console.log(onlineFriendByName(friends))

const statusFriendByName = function (friends) {
    const statusFriends = {online: [], offline: []}

    for (const friend of friends) {
        if (friend.online) {
            statusFriends.online.push(friend)
        } else {
            statusFriends.offline.push(friend)
        }
    }

    return statusFriends
}
console.log(statusFriendByName(friends))

const x = {
    a: 1,
    b: 2,
    c: 3
}

const key = Object.keys(x).length
console.log(key)


