import React from 'react';
import './form.scss';

export default function contactForm(){
    return (
        <form name="contact" method="POST" data-netlify="true">
            <h1> Schreib mir :)</h1>
            <p>
                <label>  <input type="text" name="name" placeholder="name" required/></label>
            </p>
            <p>
                <label>  <input type="email" name="email" placeholder="email" required/></label>
            </p>
            <p>
                <label> Wie wurdest Du auf mich aufmerksam?
                    <select name="aufmerksamkeit[]" multiple>
                        <option value="Instagram">Instagram</option>
                        <option value="Spotify">Spotify</option>
                        <option value="Website">Website</option>
                        <option value="Straßenmusik">Straßenmusik</option>
                        <option value="Staatstheater Wiesbaden">Staatstheater Wiesbaden</option>
                        <option value="Hochschule">Hochschule</option>
                    </select>
                </label>
            </p>
            <p>
                <label>  <textarea name="nachricht" placeholder="nachricht" required></textarea></label>
            </p>
            <p>
                <button type="submit">Senden</button>
            </p>
        </form>
    )
}