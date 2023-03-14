class CommentsController < ApplicationController

    # skip_before_action :authorize, only: [:index, :show, :create]


    def index
        comments = Comment.all
        render json: comments, status: :ok
    end


    def show
        comment = find_comment
        render json: comment, status: :ok
    end

    def create
        comment = @current_user.comments.create!(comment_params)
        render json: comment, status: :created
     end

    # def update
    #     comment = find_comment
    #     comment.update!(body: params[:body])
    #     render json: comment, status: :accepted
    # end

    def update
        # comment = Comment.find_by(id: params[:id])
        # comment = find_comment
        # comment.update!(comment_params)
        # render json: comment, status: :accepted
        comment = find_comment
        if @current_user == comment.student
            comment.update!(body: params[:body])
            render json: comment, status: :accepted
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    # check to see if they're the owner of the comment before editing
    # if not, send an auth response

    # def destroy
    #     comment = find_comment
    #     comment.destroy
    #     head :no_content
    # end

    def destroy
        comment = find_comment
        if @current_user == comment.student
            comment.destroy
            head :no_content
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:body, :post_id)
    end

    # fix update so that the currently logged in user can't edit another user's material.

end
