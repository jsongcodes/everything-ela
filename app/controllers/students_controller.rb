class StudentsController < ApplicationController

    def show
        student = Student.find_by(id: session[:student_id])
        render json {errors: ["not authorized"]}, status: :unauthorized unless student
    end

    def create
        student = Student.create!(student_params)
        render json: student, status: :created
    end

    private

    def student_params
        params.permit(:username, :password)
    end
end
