let mainWrapperPost = document.getElementById('post-block');

function ajax() {
    let request = new XMLHttpRequest();
    request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    request.addEventListener('load', function () {
        let data = JSON.parse(request.responseText);
        
        data.forEach(element => {
           createPost(element);
            
        });
        
    });
    request.send();
}

ajax();

//ამ ფუნქციის საშუალებით ვქმნით ფოსტებს ჯს.-დან

function createPost(item) {
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('posts');

    let h2Tag = document.createElement('h2');
    h2Tag.innerText = item.id;

    let h3Tag = document.createElement('h3');
    h3Tag.innerText = item.title;

    divWrapper.appendChild(h2Tag);
    divWrapper.appendChild(h3Tag);

        // თუ პირველი კეთდება
    mainWrapperPost.appendChild(divWrapper);

            // როდესაც პირველი არ გვაქვს
    // document.getElementById('post-block').appendChild(divWrapper);

    console.log(divWrapper);
}