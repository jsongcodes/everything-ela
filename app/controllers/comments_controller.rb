class CommentsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show, :create]

    def index
        # comments = Comment.all
        render json: Comment.all, status: :ok
    end

    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    def create
       comment = Comment.create!(comment_params)
        # comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
    end

    def update
        # comment = find_comment
        # if @current_user == comment.student
        #     comment.update(comment_params)
        #     render json: comment, status: :ok
        # else
        #     render json: { error: "Not authorized" }, status: :unauthorized
        # end
        comment = Comment.find_by(id: params[:id])
        comment.update!(comment_params)
        render json: comment, status: :accepted
    end

    def destroy
        # comment = find_comment
        # if @current_user == comment.student
        #     comment.destroy
        # end
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        head :no_content
    end

    private

    # def find_comment
    #     Comment.find(params[:id])
    # end

    def comment_params
        params.permit(:body, :post_id, :student_id)
    end

end
