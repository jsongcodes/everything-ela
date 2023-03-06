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
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private
    
    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:title, :image, :body, :student_id)
    end
end
