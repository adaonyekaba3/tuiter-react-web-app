const PostSummaryItem = (post) => {
  return (`
    <div class="list-group-item">
            <div class="row ms-0 me-0">
                <div class="col-sm-9 col-md-10 ps-1 pt-1 pb-1 pe-0">
                    <p class="m-0 text-secondary">${post.topic}</p>
                    <p class="m-0">
                        <b class="text-white">${post.userName} </b>
                        <i class="fa fa-check-circle text-white"></i>
                        <span class="text-secondary"> - ${post.time}</span>
                    </p>
                    <p class="m-0">
                        <b class="text-white">${post.title}</b>
                    </p>
                </div>
                <div class="d-flex align-items-center col-sm-3 col-md-2 p-2">
                    <img src="${post.image}"
                        class="rounded w-100">
                </div>
            </div>
        </div>
  `);
};

export default PostSummaryItem;

