import React from 'react';

export default function AppLayout() {
    return (
        <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', margin: 0, fontFamily: 'Arial, sans-serif' }}>
            <div className="sidebar" style={{ width: '20%', backgroundColor: '#040404', color: 'white', padding: '20px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <h2>SoundScape</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ padding: '10px 0' }}>Home</li>
                        <li style={{ padding: '10px 0' }}>Search</li>
                        <li style={{ padding: '10px 0' }}>Your Library</li>
                    </ul>
                </div>
                <div>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ padding: '10px 0' }}>Create Playlist</li>
                        <li style={{ padding: '10px 0' }}>Liked Songs</li>
                    </ul>
                </div>
            </div>
            <div className="main-content" style={{ width: '80%', backgroundColor: '#121212', color: 'white', display: 'flex', flexDirection: 'column' }}>
                <div className="header" style={{ padding: '20px', backgroundColor: '#282828', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h1>Welcome to SoundScape</h1>
                    <input type="text" placeholder="Search" style={{ padding: '10px', borderRadius: '20px', border: 'none', outline: 'none' }} />
                </div>
                <div className="content" style={{ flex: 1, padding: '20px', overflowY: 'auto', boxSizing: 'border-box' }}>
                    <p>Content goes here...</p>
                </div>
                <div className="footer" style={{ padding: '20px', backgroundColor: '#282828', boxSizing: 'border-box', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p>Footer content...</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button style={{ marginRight: '10px', padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: '#1DB954', color: 'white' }}>Play</button>
                        <button style={{ padding: '10px', borderRadius: '50%', border: 'none', backgroundColor: '#1DB954', color: 'white' }}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
