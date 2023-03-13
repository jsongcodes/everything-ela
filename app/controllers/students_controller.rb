class StudentsController < ApplicationController
    skip_before_action :authorize, only: :create
    # , :highestposter, :index

    def index
        students = Student.all
        render json: students, status: :ok
    end

    def show
        render json: @current_user
    end

    def create
        student = Student.create!(student_params)
        session[:user_id] = student.id
        render json: student, status: :created
    end

    def highestposter
        # highest_count = 0
        # post = Student.new(title: 'No posts have been made.')
        # Student.all.each do |student|
        #     if student.poster_count > post.poster_count
        #         post = student
        #     end
        # end

        post = Student.all
        render json: post, status: :ok, methods: [:poster_count]
    end

    private

    def student_params
        params.permit(:username, :password)
    end
end
