const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group item">
        <!--<li class="list-group-item fw-bold">Who to follow</li>-->
            <a href="#" class="list-group-item list-group-item-action px-2">
                <div class="row">
                    <div class="col-2 align-self-center">
                        <img src=${who.avatarIcon} class="rounded-circle" width="40">
                    </div>
                    <div class="col-6 px-0 text-nowrap">
                        <div>
                             <span>${who.username}</span>
                                <i class="fa fa-check-circle"></i>
                        </div>
                    <div class="text-secondary">${who.handle}</div>
                </div>
                <div class="col-4 align-self-center">
                    <button class="btn btn-primary rounded-pill w-100">Follow</button>
                </div>     
            </div>
        </a>
    </li>                           
    `);
}

export default WhoToFollowListItem;