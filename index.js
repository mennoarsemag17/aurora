// index.js

// Aurora - A dynamic platform designed to revolutionize the way users discover and listen to music.

// Aurora functionality
class Aurora {
    constructor() {
        this.songs = [];
        this.playlists = {};
    }

    // Method to add a new song
    addSong(songName, artist, genre) {
        const song = {
            name: songName,
            artist: artist,
            genre: genre
        };
        this.songs.push(song);
    }

    // Method to create a new playlist
    createPlaylist(playlistName) {
        this.playlists[playlistName] = [];
    }

    // Method to add a song to a playlist
    addSongToPlaylist(playlistName, songName) {
        if (this.playlists[playlistName]) {
            const song = this.songs.find(song => song.name === songName);
            if (song) {
                this.playlists[playlistName].push(song);
            } else {
                console.log("Song not found.");
            }
        } else {
            console.log("Playlist not found.");
        }
    }

    // Method to display all songs and playlists
    displayLibrary() {
        console.log("Songs:");
        this.songs.forEach(song => {
            console.log(`- ${song.name} by ${song.artist} (${song.genre})`);
        });

        console.log("\nPlaylists:");
        for (const [playlistName, playlist] of Object.entries(this.playlists)) {
            console.log(`- ${playlistName}:`);
            playlist.forEach(song => {
                console.log(`  - ${song.name} by ${song.artist} (${song.genre})`);
            });
        }
    }
}

// Example usage:
const auroraApp = new Aurora();

// Adding songs
auroraApp.addSong("Shape of You", "Ed Sheeran", "Pop");
auroraApp.addSong("Bohemian Rhapsody", "Queen", "Rock");
auroraApp.addSong("Dance Monkey", "Tones and I", "Pop");

// Creating playlists
auroraApp.createPlaylist("Chill Vibes");
auroraApp.createPlaylist("Workout Mix");

// Adding songs to playlists
auroraApp.addSongToPlaylist("Chill Vibes", "Shape of You");
auroraApp.addSongToPlaylist("Chill Vibes", "Bohemian Rhapsody");
auroraApp.addSongToPlaylist("Workout Mix", "Dance Monkey");

// Displaying songs and playlists
auroraApp.displayLibrary();
