class PostsController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = find_post
        render json: post, status: :ok
    end

    def comments
        comments = Post.find(params[:id]).comments
        render json: comments, status: :ok
    end

    def create
        post = @current_user.posts.create!(post_params)
        render json: post, status: :created
    end

    private
    
    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :image, :body)
    end
end


# # {
#     "title": "new post",
#     "image": "https://res.cloudinary.com/teepublic/image/private/s--mEymW5CG--/c_fit,g_north_west,h_816,w_840/co_000000,e_outline:40/co_000000,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1590857515/production/designs/10793192_0.jpg",
#     "body": "new post body",
#     "student_id": 60

# }

# authorizing create/edit 
# strong params
