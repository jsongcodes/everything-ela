class ApplicationController < ActionController::API
    include ActionController::Cookies

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

private

def render_unprocessable_entity_response(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
end
end
