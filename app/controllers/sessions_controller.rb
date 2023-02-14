class SessionsController < ApplicationController
    def create
        student = Student.find_by(username: params[:username])
       
        if student&.authenticate(params[:password])
            session[:student_id] = student.id
            render json: student, status: :created
        else 
            render json: {errors: ["Invalid username or password"] }, status: :unauthorized
        end 
    end 

    def destroy
        session.delete :student_id
        head :no_content
    end

end
