import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
        <div class="col-11 position-relative">
            <input class="form-control rounded-pill ps-5" placeholder="Search Tuiter">
            <i class="fa fa-search wd-pos-search"></i>
        </div>
        <div class="col-1 d-flex align-items-center">
            <i class="fa fa-cog wd-cog"></i>
        </div>
    </div>
    <ul class="nav nav-tabs mt-2 mb-2">
        <li class="nav-item">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul>
    <div class="position-relative">
        <img src="../../images/starship.jpg" class="w-100">
        <h3 class="position-absolute bottom-0 left-0 text-black">Space X's Starship</h3>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;