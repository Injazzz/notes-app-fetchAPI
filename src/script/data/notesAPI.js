function notesAPI() {
    const baseUrl = 'https://notes-api.dicoding.dev/v2/notes';

    const getNotes = () => {
        //ini menggunakan fetch API
        fetch(`${baseUrl}`)
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if(responseJson.error){
              showResponseMessage(responseJson.message);
            } else {
              renderAllNotes(responseJson.books);
            }
          })
    
          .catch(error => {
            showResponseMessage(error);
          });
    };

    const renderAllNotes = (notes) => {
        const listNotesElement = document.querySelector('#listNotes');
        listNotesElement.innerHTML = '';

        notes.forEach(note => {
            listNotesElement.innerHTML += `
            <div class="notes" id="notes-(${note.id})">
                <div class="card shadow">
                    <div class="card-header">
                        <h3>(${note.title})</h3>
                    </div>
                    <div class="card-body">
                        <p>(${note.body})</p>
                    </div>
                    <div class="card-footer">
                        <p>(${note.createdAt})</p>
                        <div class="settings">
                            <i id="callMenu" class="fa-solid fa-ellipsis-vertical"></i>
                            <ul class="menu">
                                <div class="menu-header">
                                    <p>settings</p>
                                    <div class="menu-close">
                                        <i id="closeMenu" class="fa fa-xmark"></i>
                                    </div>
                                </div>
                                <div class="menu-body">
                                    <li><i id="editNotes" class="fa-solid fa-pen"></i> Edit</li>
                                    <li><i id="moveNotes" class="fa-solid fa-box-archive"></i> Archive</li>
                                    <li><i id="removeNotes" class="fa-solid fa-trash"></i> Delete</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        const iconCallSettings = document.querySelector('#callMenu');
        const titleSettings = document.querySelector('.menu-header p');
        const menuSettings = document.querySelector('.menu');
        const closeMenu = document.querySelector('#closeMenu');

        iconCallSettings.addEventListener('click', () => {
            titleSettings.focus();
            menuSettings.classList.add('show');
        });

        closeMenu.addEventListener('click', () => {
            menuSettings.classList.remove('show');
        });
    };

    const showResponseMessage = (message = 'Check your internet connection') => {
        alert(message);
    };

    document.addEventListener('DOMContentLoaded', () => {
        getNotes();
    });
}

export default notesAPI;