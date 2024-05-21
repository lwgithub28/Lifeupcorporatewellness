import React from 'react'
import "./Faq.css"
const Faq = () => {
    return (
        <div className='faq'>
            <div className='container'>
                <h4 class="h4-head main-head">Explore Our FAQ</h4>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                <h3>1. Go over your company values with a fine-tooth comb</h3>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>The first step is to diligently
                                    reflect on your company’s values.
                                    A healthy corporate culture is
                                    strongly tied to its core principles
                                    and beliefs – and it applies from
                                    the corporate office on down.
                                    Success means employees being
                                    able to connect to these values,
                                    or else your efforts to build a
                                    workplace wellbeing culture
                                    could be doomed to failure.
                                    Consider how a corporate
                                    wellness culture aligns with
                                    current company values. Read
                                    over your company’s mission and
                                    vision statements, then create
                                    vision and mission statements for
                                    this new project and what you
                                    plan to achieve for company
                                    health.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h3>2. Getleadership buy-in and form your WellnessCommittee</h3>
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>How can you enlist the enthusiastic participation of senior executives and
                                    managers? How about your employee health champions? What do they each
                                    know so far? What gaps in their awareness do you need to address? You could
                                    handle all this in your HR department, but it makes more sense to bring other
                                    people in now, ideally from every organizational level. By establishing, supporting,
                                    and maintaining a Worksite Wellness Committee, you’ll provide opportunities for
                                    leadership, management, and staff to:
                                    <ul>
                                        <li>Foster collaboration</li>
                                        <li>Establish robust cross-level/department lines of communication</li>
                                        <li>Create your new culture of health!</li>
                                    </ul>
                                    So, who’s going to serve on your new Workplace Wellness Committee? Lots of
                                    questions! Find the checklist and instructions in Worksheet 2.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h3>3. Find out whatemployees need and want</h3>
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>This is information you’ll need to assess
                                    the success of any programs you
                                    implement and establish a baseline to
                                    determine ROI.
                                    Then you’ll take the pulse of your
                                    organization. Any successful health
                                    initiatives start with getting feedback
                                    from your people. Use surveys and focus
                                    groups to get a clearer view of
                                    demographics and learn what
                                    employees expect. Take care to include
                                    a representative sample of your people
                                    across generational, racial, sexual
                                    orientation/gender identity (SOGI) lines
                                    to gauge a realistic idea of what
                                    wellness represents to the whole
                                    organization. After you’ve carefully
                                    listened, communicate the things you
                                    learned to your employees and the steps
                                    you intend to take to begin creating a
                                    culture of health in the workplace.
                                    Throughout any survey process, INSURE
                                    CONFIDENTIALITY.</p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h3>4. Crunch the numbers</h3>
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p>The most effective wellness programs measure success in two ways: Return on
                                    Investment (ROI) and Value on Investment (VOI). These are the only ways to
                                    ensure that your health initiatives bear fruit. Because as Peter Drucker also
                                    famously quipped, “Only what gets measured gets managed.”
                                    What do you measure currently? What else could you measure?</p>
                            </div>
                        </div>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default Faq
