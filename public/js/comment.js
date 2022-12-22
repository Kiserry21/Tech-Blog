const commentPost = async (event) => {
    event.preventDefault();
    const text = document.querySelector('textarea[name="comment-body"]').value;
    const post_id = document.querySelector('input[name="post-id"]').value;
    console.log(text,post_id)

   const response = await fetch(`/api/comments/`, {
        method: 'POST',
        body: JSON.stringify({
        text,post_id
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if(response.ok){

    document.location.reload();
    }

}

document.querySelector('.btn').addEventListener('click', commentPost)
