class StudentsController < ApplicationController
    skip_before_action :authorize, only: :create

    def show
        render json: @current_user
    end

    def create
        student = Student.create!(student_params)
        session[:user_id] = student.id
        render json: student, status: :created
    end

    private

    def student_params
        params.permit(:username, :password)
    end
end
