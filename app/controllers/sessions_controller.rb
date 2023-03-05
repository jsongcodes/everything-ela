class SessionsController < ApplicationController
    # before_action :authorize_user, except: [:login]

    # def login
    #     student = Student.find_by(name:params[:username])
        
    #     if student&.authenticate(params[:password])

    #         # Group Activity => 
    #         # - Set Session's 'current_student' to student's ID

    #         # session[:current_student] => nil
    #         session[:current_student] = student.id

    #         # - Set Session's 'login_attempts' to 0

    #         # session[:login_attempts] => nil
    #         session[:login_attempts] = 0
            
    #         render json: student, status: :ok
    #     else

    #         # Group Activity =>
            
    #         # - Set Session's 'login_attempts' to 0 if Undefined / Falsey
    #         session[:login_attempts] ||= 0

    #         # - Increment Session's 'login_attempts' by 1
    #         # session[:login_attempts] = session[:login_attempts] + 1
    #         session[:login_attempts] += 1

    #         render json: { error: "Invalid Password and/or username" },  status: :unauthorized
    #     end
    # end 

    # def logout
    #     session.delete :current_student
    # end 

    skip_before_action :authorize, only: :create

    def create
        student = Student.find_by(username: params[:username])
       
        if student&.authenticate(params[:password])
            session[:user_id] = student.id
            render json: student, status: :created
        else 
            render json: {errors: ["Invalid username or password"] }, status: :unauthorized
        end 
    end 

    def destroy
        session.delete :user_id
        head :no_content
    end

end
