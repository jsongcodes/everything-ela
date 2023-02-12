class StudentsController < ApplicationController

    def show
        student = Student.find_by(id: session[:student_id])
        render json {errors: ["not authorized"]}, status: :unauthorized unless student
    end
end
